import { GET_LOGS } from '../types'
import { getLogs } from '@/api'

export default {
  state: {
    rows: [],
    total: 0,
    page: {},
    query: {},
    sort: {}
  },
  mutations: {
    [GET_LOGS] (state, result) {
      Object.assign(state, result)
    }
  },
  actions: {
    [GET_LOGS] ({ commit, state }, result) {
      commit(GET_LOGS, result)
      getLogs(state, result => {
        commit(GET_LOGS, result)
      })
    }
  }
}
