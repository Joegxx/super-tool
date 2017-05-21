import { SET_MENU } from '@/store/types'
export default {
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
