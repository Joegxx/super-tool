<template>
  <div>LogView</div>
</template>

<script>
import { LayoutMixin } from '@/mixins'
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeTopMenu: 'home',
      openLeftMenus: ['operations']
    }
  }
}
</script>
