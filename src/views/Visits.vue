<template>
  <div>Visits</div>
</template>

<script>
import mixin from '@/mixins'
export default {
  mixins: [mixin],
  data () {
    return {
      activeTopMenu: 'home',
      openLeftMenus: ['operations']
    }
  }
}
</script>
