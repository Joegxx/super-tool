<template>
  <div>LogView</div>
</template>

<script>
export default {
  created () {
    this.setActive()
  },
  methods: {
    setActive () {
      this.$store.commit('setMenu', {
        leftMenu: {
          activeName: 'logview'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
