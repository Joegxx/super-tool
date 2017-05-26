import axios from 'axios'

export function getLogs (success) {
  return axios.get('/static/data/logs.json').then(response => {
    success(response.data.rows)
  })
}
