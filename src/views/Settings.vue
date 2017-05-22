<template>
  <div>Settings</div>
</template>

<script>
import { LayoutMixin } from '@/mixins'
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeLeftMenu: '',
      openLeftMenus: ['system']
    }
  }
}
</script>
