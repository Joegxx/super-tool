import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/Home')
const LogView = () => import('@/views/LogView')
const Visits = () => import('@/views/Visits')
const ApiList = () => import('@/views/ApiList')
const About = () => import('@/views/About')

export default new Router({
  mode: 'history',
  base: '/',
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
    },
    {
      path: '/apilist',
      name: 'apilist',
      component: ApiList
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
