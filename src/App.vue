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
</style>
