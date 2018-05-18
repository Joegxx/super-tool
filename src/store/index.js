import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import { SET_COMMON } from './types'
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
    },
    curPageTitle: state => state.pageTitles[state.curPageName]
  },
  mutations: {
    [SET_COMMON] (state, common) {
      Object.assign(state, common)
    }
  },
  modules: {
    Log,
    Visit
  }
})
