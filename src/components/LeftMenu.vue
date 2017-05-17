<template>
  <Menu :active-name="data.activeName" width="auto" :open-names="data.openNames">
    <Submenu v-for="menu in data.menus" :name="menu.name" :key="menu.name">
      <template slot="title">
        <Icon :type="`ios-${menu.icon}`"></Icon>
        {{ menu.text }}
      </template>
      <Menu-item v-for="item in menu.children" :name="item.name" :key="item.name">
        <router-link :to="item.path">{{ item.text }}</router-link>
      </Menu-item>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="less" scoped>
  
</style>
