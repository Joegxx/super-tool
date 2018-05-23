<template>
 <div class="layout-header">
    <Menu mode="horizontal" theme="light" :active-name="activeName" @on-select="onSelect">
      <div class="layout-logo" @click="onSelect('home')">
        <img src="../assets/logo.png">
        <span>SuperTool</span>
      </div>
      <div class="layout-nav">
        <MenuItem v-for="item in menus" :name="item.name" :key="item.name">
          <Icon :type="item.icon"></Icon>
          <span>{{ item.text }}</span>
        </MenuItem>
      </div>
      <div class="layout-user">
        <img src="../assets/user.png">
        <span>龚磊</span>
      </div>
    </Menu>
  </div>
</template>

<script>
export default {
  props: ['menus', 'activeName'],
  methods: {
    onSelect (name) {
      this.$router.push({ name })
    }
  }
}
</script>

