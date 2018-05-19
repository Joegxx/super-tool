import axios from 'axios'
import moment from 'moment'

const DATAPATH = 'static/data/'
const LOGDATA = DATAPATH + 'logs.json'
const VISITDATA = DATAPATH + 'visits.json'

export function getLogs ({ page, query, sort }, success) {
  return axios.get(LOGDATA).then(response => {
    let totalRows = response.data[query.type] || []
    const { key, order } = sort
    if (key === 'time') {
      totalRows = totalRows.sort((a, b) => {
        const sub = moment(a.time) - moment(b.time)
        if (order === 'asc') {
          return sub
        } else {
          return sub * -1
        }
      })
    }
    const level = query.level
    if (level > -1) {
      totalRows = totalRows.filter(item => item.level === level)
    }
    const text = query.text
    if (text) {
      totalRows = totalRows.filter(item => new RegExp(text, 'gi').test(item.message))
    }
    const time = query.time
    if (time && time.length === 2) {
      const [start, end] = time
      if (start && end) {
        const dateStr = date => moment(date).format('YYYY-MM-DD HH:mm:ss')
        totalRows = totalRows.filter(item => moment(item.time).isBetween(dateStr(start), dateStr(end)))
      }
    }
    const total = totalRows.length
    const { current, size } = page
    const rows = totalRows.slice((current - 1) * size, current * size)
    const result = { total, rows }
    success(result)
    return result
  })
}

const getProjectVistis = ({ names, date }, success) => {
  return axios.get(VISITDATA).then(response => {
    const totalData = response.data.data
    const projectData = { xData: [], yData: {} }
    const { xData, yData } = projectData
    if (date && date.length === 2) {
      let [start, end] = date
      if (start && end) {
        const fmt = 'YYYY-MM-DD'
        start = moment(start).format(fmt)
        end = moment(end).add(1, 'days').format(fmt)
        const diff = moment(end).diff(moment(start), 'days')
        for (let i = 0; i < diff; i++) {
          const dateStr = moment(start).add(i, 'days').format(fmt)
          xData.push(dateStr)
          const data = totalData.filter(item => item.date === dateStr)
          for (let name of names) {
            const mData = data.filter(item => item.project === name)
            const count = mData.length && mData.map(m => m.usercount).reduce((prev, cur) => prev + cur)
            const oData = yData[name] || []
            oData.push(count)
            yData[name] = oData
          }
        }
      }
    }
    success({ projectData, projectLoading: false })
    return projectData
  })
}

const getModuleVistis = ({ project, date }, success) => {
  return axios.get(VISITDATA).then(response => {
    const totalData = response.data.data
    let data = []
    const moduleData = { xData: [], yData: [] }
    let { xData, yData } = moduleData
    if (date) {
      data = totalData.filter(item => item.date === date)
      if (project) {
        data = data.filter(item => item.project === project)
      }
      for (let { module, usercount } of data) {
        xData.push(module)
        yData.push(usercount)
      }
    }
    success({ moduleData, moduleLoading: false })
    return moduleData
  })
}

export function getVistis ({ projectQuery, moduleQuery }, success) {
  if (Object.keys(moduleQuery).length > 0) {
    return getModuleVistis(moduleQuery, success)
  } else {
    return getProjectVistis(projectQuery, success)
  }
}
