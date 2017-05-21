<template>
  <Menu :active-name="activeName" width="auto" :open-names="openNames" @on-select="onSelect" accordion ref="menu">
    <Submenu v-for="menu in menus" :name="menu.name" :key="menu.name">
      <template slot="title">
        <Icon :type="menu.icon"></Icon>
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
  props: ['menus', 'activeName', 'openNames'],
  watch: {
    openNames (val) {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    },
    activeName (val) {
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
