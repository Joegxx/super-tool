<template>
  <Menu :active-name="data.activeName" width="auto" :open-names="data.openNames" @on-select="onSelect">
    <Submenu v-for="menu in data.menus" :name="menu.name" :key="menu.name">
      <template slot="title">
        <Icon :type="`ios-${menu.icon}`"></Icon>
        {{ menu.text }}
      </template>
      <Menu-item v-for="item in menu.children" :name="item.name" :key="item.name">
        {{ item.text }}
      </Menu-item>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    onSelect (name) {
      this.$router.push({ name })
    }
  }
}
</script>
