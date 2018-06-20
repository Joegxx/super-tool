import axios from 'axios'
import moment from 'moment'

const RESTHOST = 'http://localhost:3000/'
const LOGURL = `${RESTHOST}logs`
const VISITURL = `${RESTHOST}visits`

export function getLogs ({ page, query, sort }, success) {
  return axios.post(LOGURL, {
    query: {
      type: 'SuperEnvMall.Server'
    },
    options: {
      sort: '-time',
      limit: 10,
      skip: 10
    }
  }).then(response => {
    let result = response.data
    success(result)
    return result
  })
}

const getProjectVistis = ({ names, date }, success) => {
  return axios.get(VISITURL).then(response => {
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
  return axios.get(VISITURL).then(response => {
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
