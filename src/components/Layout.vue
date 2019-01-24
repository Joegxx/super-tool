<template>
  <div class="layout">
    <TopMenu :menus="topMenus" :active-name="activeTopMenu" />
    <div class="layout-content">
      <Row>
        <Col :sm="4" :xs="0">
          <LeftMenu :menus="curLeftMenus" :active-name="activeLeftMenu" class="left-menu" />
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
      2017-2018 &copy; Gonglei
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
      'activeLeftMenu']),
    ...mapGetters(['curLeftMenus'])
  },
  components: { TopMenu, LeftMenu }
}
</script>

<style lang="less">
@import '../styles/layout.less';
</style>
