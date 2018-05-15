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
  },
  methods: {
    setMenu () {
      this.$store.commit(SET_MENU, this.$data)
    }
  }
}

export const ChartMixin = {
  mounted () {
    const vm = this
    let timeout
    window.onresize = () => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        const charts = vm.$refs
        Object.keys(charts).forEach(key => {
          let chart = charts[key]
          if (chart) {
            chart.resize()
          }
        })
      }, 100)
    }
  }
}
