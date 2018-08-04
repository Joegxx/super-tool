import { SET_COMMON } from '@/store/types'

export const LayoutMixin = {
  data () {
    return {
      activeTopMenu: this.$route.name,
      activeLeftMenu: this.$route.name,
      curPageName: this.$route.name
    }
  },
  created () {
    this.setCommon()
  },
  mounted () {
    this.setContentHeight()
    let timeout
    window.onresize = () => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        this.setContentHeight()
        if (this.resize) {
          this.resize()
        }
      }, 100)
    }
  },
  methods: {
    setCommon () {
      this.$store.commit(SET_COMMON, this.$data)
      document.title = `${this.$store.getters.curPageTitle} - SuperTool`
    },
    setContentHeight () {
      const dgec = className => document.getElementsByClassName(className)
      const contentHeight = document.documentElement.clientHeight - dgec('layout-header')[0].clientHeight - dgec('layout-footer')[0].clientHeight - 32
      const contentMainHeight = dgec('layout-content-main')[0].clientHeight
      const minHeight = `${Math.max(contentHeight, contentMainHeight)}px`
      dgec('layout-content')[0].style.minHeight = minHeight
      dgec('left-menu')[0].style.minHeight = minHeight
    }
  }
}
