const pageTitles = {
  home: '首页',
  about: '系统介绍',
  logview: '日志查看',
  visits: '访问统计',
  apilist: '接口列表',
  organization: '组织结构'
}
const linkMenus = [{
  name: 'editor',
  text: '设计器',
  icon: 'ios-cloudy-outline',
  href: '/clean-ui/editor.html'
}, {
  name: 'lab',
  text: '实验室',
  icon: 'ios-cube-outline',
  href: '/clean-ui/lab.html'
}, {
  name: 'topo',
  text: '拓扑',
  icon: 'ios-link-outline',
  href: '/clean-ui/topo.html'
}, {
  name: 'cleanui',
  text: 'CleanUI',
  icon: 'ios-paper-plane-outline',
  href: '/clean-ui'
}]

const topMenus = [{
  name: 'home',
  text: pageTitles.home,
  icon: 'ios-home'
}, ...linkMenus, {
  name: 'about',
  text: '帮助',
  icon: 'ios-help-circle'
}]
const leftMenus = {
  home: [{
    text: '运维工具',
    children: [{
      name: 'organization',
      text: pageTitles.organization,
      icon: 'ios-people-outline',
      color: '#6e92ce'
    }, {
      name: 'logview',
      text: pageTitles.logview,
      icon: 'ios-paper-outline',
      color: '#0c9'
    }, {
      name: 'visits',
      text: pageTitles.visits,
      icon: 'ios-pulse-outline',
      color: '#39f'
    }, {
      name: 'apilist',
      text: pageTitles.apilist,
      icon: 'ios-barcode-outline',
      color: '#57C534'
    }]
  }],
  about: [{
    text: '关于',
    children: [{
      name: 'about',
      text: pageTitles.about,
      icon: 'ios-information-circle'
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
