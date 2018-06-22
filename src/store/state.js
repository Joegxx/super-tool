const pageTitles = {
  home: '首页',
  about: '系统介绍',
  logview: '日志查看',
  visits: '访问统计'
}
const topMenus = [{
  name: 'home',
  text: pageTitles.home,
  icon: 'home'
}, {
  name: 'about',
  text: '帮助',
  icon: 'ios-help'
}]
const leftMenus = {
  home: [{
    text: '运维工具',
    children: [{
      name: 'logview',
      text: pageTitles.logview,
      icon: 'ios-paper-outline',
      color: '#0c9'
    }, {
      name: 'visits',
      text: pageTitles.visits,
      icon: 'ios-pulse',
      color: '#39f'
    }]
  }],
  about: [{
    text: '关于',
    children: [{
      name: 'about',
      text: pageTitles.about,
      icon: 'information-circled'
    }]
  }]
}

export default {
  activeTopMenu: '',
  activeLeftMenu: '',
  topMenus,
  leftMenus,
  pageTitles,
  curPageName: ''
}
