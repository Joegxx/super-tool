import { GET_VISITS } from '../types'
import { getVistis } from '@/api/local'

export default {
  state: {
    projectLoading: true,
    projectQuery: {},
    projectData: {
      xData: [],
      yData: {}
    },
    moduleLoading: true,
    moduleQuery: {},
    moduleData: {
      xData: [],
      yData: []
    }
  },
  mutations: {
    [GET_VISITS] (state, params) {
      Object.assign(state, params)
    }
  },
  actions: {
    [GET_VISITS] ({ commit, state }, params) {
      commit(GET_VISITS, params)
      return getVistis(state, result => {
        commit(GET_VISITS, result)
      })
    }
  }
}
