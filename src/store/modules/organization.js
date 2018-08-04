import { GET_ORGANIZATION } from '../types'
import { getOrganization } from '@/api/local'

export default {
  state: {
    data: {}
  },
  mutations: {
    [GET_ORGANIZATION] (state, params) {
      Object.assign(state, params)
    }
  },
  actions: {
    [GET_ORGANIZATION] ({ commit }) {
      return getOrganization(result => {
        commit(GET_ORGANIZATION, result)
      })
    }
  }
}
