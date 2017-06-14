// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import moment from 'moment'
import iview from './utils/iview'

Vue.prototype.$moment = moment

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iview.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iview.LoadingBar.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
