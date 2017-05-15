import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/Home')
const LogView = () => import('@/views/LogView')
const Visits = () => import('@/views/Visits')

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
