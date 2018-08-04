import axios from 'axios'
import moment from 'moment'

const DATAPATH = 'static/data/'
const LOG_DATA = DATAPATH + 'logs.json'
const VISIT_DATA = DATAPATH + 'visits.json'
const ORGANIZATION_DATA = DATAPATH + 'organization.json'

export function getLogs ({ page, query, sort }, success) {
  return axios.get(LOG_DATA).then(response => {
    let totalRows = response.data.filter(item => item.type === query.type)
    let { key, order } = sort
    if (key === 'time') {
      totalRows = totalRows.sort((a, b) => {
        let sub = moment(a.time) - moment(b.time)
        if (order === 'asc') {
          return sub
        } else {
          return sub * -1
        }
      })
    }
    let level = query.level
    if (level > -1) {
      totalRows = totalRows.filter(item => item.level === level)
    }
    let text = query.text
    if (text) {
      totalRows = totalRows.filter(item => new RegExp(text, 'i').test(item.message))
    }
    let time = query.time
    if (time && time.length === 2) {
      let [start, end] = time
      if (start && end) {
        let dateStr = date => moment(date).format('YYYY-MM-DD HH:mm:ss')
        totalRows = totalRows.filter(item => moment(item.time).isBetween(dateStr(start), dateStr(end)))
      }
    }
    let total = totalRows.length
    let { current, size } = page
    let rows = totalRows.slice((current - 1) * size, current * size)
    let result = { total, rows }
    success(result)
    return result
  })
}

const getProjectVistis = ({ names, date }, success) => {
  return axios.get(VISIT_DATA).then(response => {
    let totalData = response.data
    let projectData = { xData: [], yData: {} }
    let { xData, yData } = projectData
    if (date && date.length === 2) {
      let [start, end] = date
      if (start && end) {
        const fmt = 'YYYY-MM-DD'
        let dtStart = moment(start).format(fmt)
        let dtEnd = moment(end).add(1, 'days').format(fmt)
        let diff = moment(dtEnd).diff(moment(dtStart), 'days')
        for (let i = 0; i < diff; i++) {
          let dateStr = moment(dtStart).add(i, 'days').format(fmt)
          xData.push(dateStr)
          let data = totalData.filter(item => item.date === dateStr)
          for (let name of names) {
            let mData = data.filter(item => item.project === name)
            let count = mData.length && mData.map(m => m.usercount).reduce((prev, cur) => prev + cur)
            let oData = yData[name] || []
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
  return axios.get(VISIT_DATA).then(response => {
    let totalData = response.data
    let data = []
    let moduleData = { xData: [], yData: [] }
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

export function getOrganization (success) {
  return axios.get(ORGANIZATION_DATA).then(response => {
    let data = response.data
    success({ data })
    return data
  })
}
