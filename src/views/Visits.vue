<template>
  <div>Visits</div>
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
          activeName: 'visits'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
