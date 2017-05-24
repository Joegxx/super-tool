const topMenus = [{
  name: 'home',
  text: '首页',
  icon: 'home'
}, {
  name: 'settings',
  text: '设置',
  icon: 'settings'
}]
const leftMenus = {
  home: [{
    name: 'operations',
    text: '运维统计',
    icon: 'navigate',
    children: [{
      name: 'logview',
      text: '日志查看',
      icon: 'ios-box-outline',
      color: '#0c9'
    }, {
      name: 'visits',
      text: '访问统计',
      icon: 'ios-pulse',
      color: '#39f'
    }]
  }],
  settings: [{
    name: 'system',
    text: '系统管理',
    icon: 'gear-a',
    children: [{
      name: 'logview',
      text: '用户管理'
    }, {
      name: 'visits',
      text: '权限管理'
    }]
  }]
}
export default {
  activeTopMenu: '',
  activeLeftMenu: '',
  openLeftMenus: [],
  topMenus,
  leftMenus
}
