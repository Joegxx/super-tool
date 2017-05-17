export default {
  state: {
    topMenu: {
      activeName: 'home',
      menus: [{
        name: 'home',
        text: '首页',
        icon: 'navigate',
        path: '/'
      }, {
        name: 'settings',
        text: '设置',
        icon: 'paper',
        path: '/'
      }]
    },
    leftMenu: {
      activeName: '',
      openNames: ['operations'],
      menus: [{
        name: 'operations',
        text: '运维统计',
        icon: 'keypad',
        children: [{
          name: 'logview',
          text: '日志查看',
          path: '/logview'
        }, {
          name: 'visits',
          text: '访问统计',
          path: '/visits'
        }]
      }]
    }
  },
  mutations: {
    setMenu (state, { topMenu, leftMenu }) {
      state.topMenu = { ...state.topMenu, ...topMenu }
      state.leftMenu = { ...state.leftMenu, ...leftMenu }
    }
  }
}
