<template>
  <div>Home</div>
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
          activeName: ''
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
