<template>
  <Menu :active-name="activeName" width="auto" @on-select="onSelect" ref="menu">
    <MenuGroup v-for="menu in menus" :title="menu.text" :key="menu.name">
      <MenuItem v-for="item in menu.children" :name="item.name" :key="item.name">
        <Icon :type="item.icon"></Icon>
        {{ item.text }}
      </MenuItem>
    </MenuGroup>
  </Menu>
</template>

<script>
export default {
  props: ['menus', 'activeName'],
  watch: {
    activeName () {
      this.$nextTick(() => {
        this.$refs.menu.updateActiveName()
      })
    }
  },
  methods: {
    onSelect (name) {
      this.$router.push({ name })
    }
  }
}
</script>
