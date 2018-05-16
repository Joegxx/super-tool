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

<style lang="less">
@header-height: 80px;
@logo-height: 50px;
.layout-header {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 1px;
  height: @header-height;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  > .ivu-menu-horizontal {
    height: 100%;
    line-height: @header-height;
    .ivu-menu-item {
      > i {
        font-size: 20px;
      }
      > i, > span {
        vertical-align: middle;
      }
    }
  }
}
.layout-logo {
  height: @logo-height;
  position: absolute;
  top: (@header-height - @logo-height)/2;
  left: 50px;
  cursor: pointer;
  > img {
    display: inline-block;
    height: 100%;
  }
  > span:extend(.layout-logo > img) {
    font-size: 20px;
    color: #2b3641;
    vertical-align: top;
    line-height: @logo-height;
    margin-left: 15px;
  }
}
.layout-nav {
  width: 210px;
  margin: 0 auto;
  height: @header-height;
}
.layout-user:extend(.layout-logo all) {
  left: auto;
  right: 50px;
  cursor: default;
  > img {
    border-radius: 100%;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  }
  > span {
    color: #495060;
    font-size: 14px;
  }
}
</style>
