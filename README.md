# SuperTool

> 基于Vue.js的辅助运维工具

## 后端

### [项目地址](https://github.com/igonglei/super-tool-server)

## 预览

### [在线预览](https://igonglei.github.io/super-tool/)

### 预览图
<p>
  <a href="https://igonglei.github.io/super-tool/" target="_blank">
    <img src="https://raw.githubusercontent.com/igonglei/super-tool/master/screenshots/organization.png">
    <img src="https://raw.githubusercontent.com/igonglei/super-tool/master/screenshots/visits.png">
  </a>
</p>

## 技术栈

- Vue.js
- Vue-router
- Vuex
- iView
- Webpack
- ES6
- Less
- mxGraph
- ECharts
- Axios
- Swagger-UI

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
│   ├── organization.png
│   └── visits.png
├── src
│   ├── api
│   │   ├── index.js
│   │   └── local.js
│   ├── assets
│   │   ├── cui.png
│   │   ├── logo.png
│   │   └── user.png
│   ├── components
│   │   ├── Charts.vue
│   │   ├── Layout.vue
│   │   ├── LeftMenu.vue
│   │   ├── Organization.vue
│   │   ├── SwaggerUI.vue
│   │   └── TopMenu.vue
│   ├── mixins
│   │   └── index.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── modules
│   │   │   ├── log.js
│   │   │   ├── organization.js
│   │   │   └── visit.js
│   │   ├── index.js
│   │   ├── state.js
│   │   └── types.js
│   ├── styles
│   │   ├── common.less
│   │   ├── layout.less
│   │   ├── mxGraph.less
│   │   └── searchPanel.less
│   ├── utils
│   │   └── iview.js
│   └── views
│       ├── About.vue
│       ├── ApiList.vue
│       ├── Home.vue
│       ├── LogView.vue
│       ├── Organization.vue
│       └── Visits.vue
│   ├── App.vue
│   └── main.js
├── static
│   ├── favicon.ico
│   └── data
│       ├── logs.json
│       ├── organization.json
│       ├── swagger.json
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
