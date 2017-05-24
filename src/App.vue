<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
export default {
  name: 'app',
  components: { Layout }
}
</script>

<style lang="less">
@import './styles/common.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #657180;
}
</style>
