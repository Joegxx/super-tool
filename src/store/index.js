import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import { SET_MENU } from './types'
import Log from './modules/log'
import Visit from './modules/visit'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters: {
    curLeftMenus: state => state.leftMenus[state.activeTopMenu] || [],
    curChildMenus (state, getters) {
      const menus = []
      getters.curLeftMenus.forEach(item => {
        menus.push(...item.children)
      })
      return menus
    }
  },
  mutations: {
    [SET_MENU] (state, menu) {
      Object.assign(state, menu)
    }
  },
  modules: {
    Log,
    Visit
  }
})
