<template>
  <Menu mode="horizontal" theme="light" :active-name="data.activeName" @on-select="onSelect">
    <div class="layout-logo">
      <img src="../assets/logo.png">
      <span>SuperTool</span>
    </div>
    <div class="layout-nav">
      <Menu-item v-for="item in data.menus" :name="item.name" :key="item.name">
        <Icon :type="`ios-${item.icon}`"></Icon>{{ item.text }}
      </Menu-item>
    </div>
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
