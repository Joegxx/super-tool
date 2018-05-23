# SuperTool

> 基于Vue.js的辅助运维工具

## 预览

### [在线预览](https://igonglei.github.io/super-tool/)

### 预览图
<p>
  <a href="https://igonglei.github.io/super-tool/" target="_blank">
    <img src="https://raw.githubusercontent.com/igonglei/super-tool/master/screenshots/logs.png">
    <img src="https://raw.githubusercontent.com/igonglei/super-tool/master/screenshots/visits.png">
  </a>
</p>

## 技术栈

- Vue.js
- Vue-router
- Vuex
- Vue-cli
- iView
- Webpack
- ES6
- Less
- Axios

## 项目结构
```
.
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── screenshots
│   ├── logs.png
│   └── visits.png
├── src
│   ├── api
│   │   └── index.js
│   ├── assets
│   │   ├── cui.png
│   │   ├── logo.png
│   │   └── user.png
│   ├── components
│   │   ├── Charts.vue
│   │   ├── Developing.vue
│   │   ├── Layout.vue
│   │   ├── LeftMenu.vue
│   │   └── TopMenu.vue
│   ├── mixins
│   │   └── index.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── modules
│   │   │   ├── log.js
│   │   │   └── visit.js
│   │   ├── index.js
│   │   ├── state.js
│   │   └── types.js
│   ├── styles
│   │   ├── common.less
│   │   ├── layout.less
│   │   └── searchPanel.less
│   ├── utils
│   │   └── iview.js
│   └── views
│       ├── About.vue
│       ├── Home.vue
│       ├── LogView.vue
│       └── Visits.vue
│   ├── App.vue
│   └── main.js
├── static
│   ├── favicon.png
│   └── data
│       ├── logs.json
│       └── visits.json
├── index.html
├── package.json
└── README.md
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
