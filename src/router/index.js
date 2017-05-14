import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import LogView from '@/views/LogView'
import Visits from '@/views/Visits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/logview',
      name: 'logview',
      component: LogView
    },
    {
      path: '/visits',
      name: 'visits',
      component: Visits
    }
  ]
})
