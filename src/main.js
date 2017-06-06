// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import moment from 'moment'
import 'iview/dist/styles/iview.css'
import LoadingBar from 'ivc/loading-bar'
import Icon from 'ivc/icon'
import { Row, Col } from 'ivc/grid'
import Menu from 'ivc/menu'
import Card from 'ivc/card'
import { Select, Option } from 'ivc/select'
import Radio from 'ivc/radio'
import Input from 'ivc/input'
import Table from 'ivc/table'
import Page from 'ivc/page'
import Button from 'ivc/button'
import DatePicker from 'ivc/date-picker'
import Modal from 'ivc/modal'

Vue.prototype.$moment = moment

const iview = {
  LoadingBar,
  Icon,
  Row,
  Col,
  Menu,
  MenuItem: Menu.Item,
  Submenu: Menu.Sub,
  Card,
  Select,
  Option,
  Radio,
  RadioGroup: Radio.Group,
  Input,
  Table,
  Page,
  Button,
  DatePicker,
  Modal
}
Object.keys(iview).forEach((key) => {
  Vue.component(key, iview[key])
})
Vue.prototype.$Modal = Modal

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach(route => {
  LoadingBar.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
