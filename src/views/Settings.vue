<template>
  <developing></developing>
</template>

<script>
import { LayoutMixin } from '@/mixins'
import Developing from '@/components/Developing'
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeLeftMenu: '',
      openLeftMenus: ['system']
    }
  },
  components: { Developing }
}
</script>
