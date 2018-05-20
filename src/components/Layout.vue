<template>
  <div class="layout">
    <top-menu :menus="topMenus" :active-name="activeTopMenu"></top-menu>
    <div class="layout-content">
      <Row>
        <Col :sm="4" :xs="0">
          <left-menu :menus="curLeftMenus" :active-name="activeLeftMenu" :open-names="openLeftMenus" class="left-menu"></left-menu>
        </Col>
        <Col :sm="20" :xs="24">
          <div class="layout-content-main">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </Col>
      </Row>
    </div>
    <div class="layout-footer">
      2017 &copy; Gonglei
    </div>
    <BackTop :height="50" :duration="700"></BackTop>
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

<style>
.layout {
  background: #eee;
  padding:  1px;
}
.layout-content {
  min-height: 400px;
  margin: 95px auto 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
.layout-content-main {
  padding: 30px;
}
.layout-footer {
  text-align: center;
  padding: 15px 0;
  color: #666;
  background: #fff;
}
</style>
