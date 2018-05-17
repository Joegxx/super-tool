const topMenus = [{
  name: 'home',
  text: '首页',
  icon: 'home'
}, {
  name: 'about',
  text: '关于',
  icon: 'information-circled'
}]
const leftMenus = {
  home: [{
    name: 'operations',
    text: '运维工具',
    icon: 'wrench',
    children: [{
      name: 'logview',
      text: '日志查看',
      icon: 'ios-paper-outline',
      color: '#0c9'
    }, {
      name: 'visits',
      text: '访问统计',
      icon: 'ios-pulse',
      color: '#39f'
    }]
  }],
  about: [{
    name: 'about',
    text: '关于',
    icon: 'information-circled',
    children: [{
      name: 'about',
      text: '项目介绍'
    }]
  }]
}
const pageTitles = {
  home: '首页',
  about: '关于',
  logview: '日志查看',
  visits: '访问统计'
}
export default {
  activeTopMenu: '',
  activeLeftMenu: '',
  openLeftMenus: [],
  topMenus,
  leftMenus,
  pageTitles,
  curPageName: ''
}
