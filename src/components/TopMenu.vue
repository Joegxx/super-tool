<template>
 <div class="layout-header">
    <Menu mode="horizontal" theme="light" :active-name="activeName" @on-select="onSelect" ref="tmenu">
      <div class="layout-logo" @click="onSelect('home')">
        <img src="../assets/logo.png" alt="SuperTool" />
        <span>SuperTool</span>
      </div>
      <div class="layout-nav">
        <MenuItem v-for="item in menus" :name="item.name" :key="item.name" :class="item.cls">
          <template v-if="item.href">
            <a :href="item.href" target="_blank">
              <Icon :type="item.icon" />
              <span>{{ item.text }}</span>
            </a>
          </template>
          <template v-else>
            <Icon :type="item.icon" />
            <span>{{ item.text }}</span>
          </template>
        </MenuItem>
      </div>
      <div class="layout-user">
        <Poptip trigger="hover">
          <img class="avatar" src="../assets/user.png" alt="龚磊" />
          <div slot="content">
            <img class="mp-code" src="https://lg-npha00ki-1257320081.cos.ap-shanghai.myqcloud.com/mp-code.jpg" />
          </div>
        </Poptip>
      </div>
    </Menu>
  </div>
</template>

<script>
export default {
  props: ['menus', 'activeName'],
  methods: {
    onSelect (name) {
      const { href } = this.menus.find(n => n.name === name)
      if (href) {
        this.$refs.tmenu.currentActiveName = this.activeName
        return
      }
      this.$router.push({ name })
    }
  }
}
</script>
