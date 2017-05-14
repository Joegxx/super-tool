<template>
  <ul class="nav">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/logview">LogView</router-link></li>
    <li><router-link to="/visits">Visits</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="less" scoped>
  .nav {
    list-style: none;
    >li {
      display: inline-block;
    }
  }
</style>
