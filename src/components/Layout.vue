<template>
  <div class="layout">
    <top-menu :menus="topMenus" :active-name="activeTopMenu"></top-menu>
    <div class="layout-content">
      <Row>
        <Col span="5">
          <left-menu :menus="curLeftMenus" :active-name="activeLeftMenu" :open-names="openLeftMenus"></left-menu>
        </Col>
        <Col span="19">
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
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  min-width: 1280px;
}
.layout-content {
  min-height: 400px;
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
