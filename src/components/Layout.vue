<template>
  <div class="layout">
    <div class="layout-header">
      <top-menu :menus="topMenus" :active-name="activeTopMenu"></top-menu>
    </div>
    <div class="layout-content">
      <Row>
        <i-col span="5">
          <left-menu :menus="curLeftMenus" :active-name="activeLeftMenu" :open-names="openLeftMenus"></left-menu>
        </i-col>
        <i-col span="19">
          <div class="layout-content-main">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </i-col>
      </Row>
    </div>
    <div class="layout-footer">
      2017 &copy; Gonglei
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu'
export default {
  computed: {
    ...mapState([
      'topMenus',
      'activeTopMenu',
      'activeLeftMenu',
      'openLeftMenus']),
    ...mapGetters(['curLeftMenus'])
  },
  components: { TopMenu, LeftMenu }
}
</script>

<style lang="less">
@header-height: 80px;
@logo-height: 50px;
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.layout-header {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 1px;
  >.ivu-menu-horizontal {
    height: @header-height;
    line-height: @header-height;
  }
}
.layout-logo {
  height: @logo-height;
  float: left;
  position: relative;
  top: (@header-height - @logo-height)/2;
  left: 20px;
  > img {
    display: inline-block;
    height: 100%;
  }
  > span:extend(.layout-logo > img) {
    font-size: 20px;
    color: #39f;
    vertical-align: top;
    line-height: @logo-height;
  }
}
.layout-nav {
  width: 210px;
  margin: 0 auto;
  height: @header-height;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-footer {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
