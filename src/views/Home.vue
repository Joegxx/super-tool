<template>
  <div>Home</div>
</template>

<script>
import mixin from '@/mixins'
export default {
  mixins: [mixin],
  data () {
    return {
      activeLeftMenu: '',
      openLeftMenus: ['operations']
    }
  }
}
</script>
