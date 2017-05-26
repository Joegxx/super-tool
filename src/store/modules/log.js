import { GET_LOGS } from '../types'
import { getLogs } from '@/api'

export default {
  state: {
    rows: []
  },
  getters: {

  },
  mutations: {
    [GET_LOGS] (state, rows) {
      state.rows = rows
    }
  },
  actions: {
    [GET_LOGS] ({ commit }) {
      getLogs(rows => {
        commit(GET_LOGS, rows)
      })
    }
  }
}
