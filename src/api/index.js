import axios from 'axios'
import moment from 'moment'

export function getLogs ({ page, query, sort }, success) {
  return axios.get('/static/data/logs.json').then(response => {
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
    success({ total, rows })
  })
}
