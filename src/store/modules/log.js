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
    [GET_LOGS] (state, params) {
      Object.assign(state, params)
    }
  },
  actions: {
    [GET_LOGS] ({ commit, state }, params) {
      commit(GET_LOGS, params)
      getLogs(state, result => {
        commit(GET_LOGS, result)
      })
    }
  }
}
