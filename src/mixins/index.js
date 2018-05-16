import { SET_MENU } from '@/store/types'

export const LayoutMixin = {
  data () {
    return {
      activeTopMenu: this.$route.name,
      activeLeftMenu: this.$route.name,
      openLeftMenus: []
    }
  },
  created () {
    this.setMenu()
    this.setContentHeight()
  },
  mounted () {
    let timeout
    window.onresize = () => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        this.setContentHeight()
        const charts = this.$refs
        Object.keys(charts).forEach(key => {
          let chart = charts[key]
          if (chart) {
            chart.resize()
          }
        })
      }, 100)
    }
  },
  methods: {
    setMenu () {
      this.$store.commit(SET_MENU, this.$data)
    },
    setContentHeight () {
      const dgec = className => document.getElementsByClassName(className)
      const contentHeight = document.documentElement.clientHeight - dgec('layout-header')[0].clientHeight - dgec('layout-footer')[0].clientHeight
      const minHeight = `${contentHeight - 32}px`
      dgec('layout-content')[0].style.minHeight = minHeight
      dgec('left-menu')[0].style.minHeight = minHeight
    }
  }
}
