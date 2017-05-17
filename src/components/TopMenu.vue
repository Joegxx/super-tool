<template>
  <Menu mode="horizontal" theme="light" :active-name="data.activeName">
    <div class="layout-logo">
      <img src="../assets/logo.png">
      <span>SuperTool</span>
    </div>
    <div class="layout-nav">
      <Menu-item v-for="item in data.menus" :name="item.name" :key="item.name">
        <router-link :to="item.path">
          <Icon :type="`ios-${item.icon}`"></Icon>{{ item.text }}
        </router-link>
      </Menu-item>
    </div>
  </Menu>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="less" scoped>
  
</style>
