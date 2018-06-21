import axios from 'axios'
import moment from 'moment'

const RESTHOST = 'http://localhost:3000/'
const LOGURL = `${RESTHOST}logs`
const VISITURL = `${RESTHOST}visits`

export function getLogs ({ page, query, sort }, success) {
  let { type, level, text, time } = query
  let { size, current } = page
  let { key, order } = sort
  return axios.post(LOGURL, {
    query: {
      type,
      level: level === -1 ? undefined : level,
      message: { $regex: text, $options: 'i' },
      time: { $gte: time[0], $lte: time[1] }
    },
    option: {
      sort: { [key]: order },
      limit: size,
      skip: (current - 1) * size
    }
  }).then(response => {
    let result = response.data
    success(result)
    return result
  })
}

const getProjectVistis = ({ names, date }, success) => {
  return axios.post(VISITURL, {
    query: {
      date: { $gte: date[0], $lte: date[1] }
    }
  }).then(response => {
    let totalData = response.data
    let projectData = { xData: [], yData: {} }
    let { xData, yData } = projectData
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

const getModuleVistis = (query, success) => {
  return axios.post(VISITURL, {
    query
  }).then(response => {
    let { data } = response
    let moduleData = { xData: [], yData: [] }
    let { xData, yData } = moduleData
    for (let { module, usercount } of data) {
      xData.push(module)
      yData.push(usercount)
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
