import axios from 'axios'
import moment from 'moment'

const RESTHOST = 'http://localhost:3000/'
const LOGURL = `${RESTHOST}logs`
const VISITURL = `${RESTHOST}visits`

export function getLogs ({ page, query, sort }, success) {
  let { type, level, text, time } = query
  let { size, current } = page
  let { key, order } = sort
  let [start, end] = time
  return axios.post(LOGURL, {
    query: {
      type,
      level: level === -1 ? undefined : level,
      message: { $regex: text, $options: 'i' },
      time: start ? { $gte: start, $lte: end } : undefined
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
  let [start, end] = date
  return axios.post(VISITURL, {
    query: {
      date: { $gte: start, $lte: end }
    }
  }).then(response => {
    let totalData = response.data
    let projectData = { xData: [], yData: {} }
    if (start && end) {
      let { xData, yData } = projectData
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
