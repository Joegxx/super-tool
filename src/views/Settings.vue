<template>
  <div>Settings</div>
</template>

<script>
import mixin from '@/mixins'
export default {
  mixins: [mixin],
  data () {
    return {
      activeLeftMenu: '',
      openLeftMenus: ['system']
    }
  }
}
</script>
