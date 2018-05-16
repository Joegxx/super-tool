<template>
  <div class="about">
     <h1>关于SuperTool</h1>
     <p>SuperTool是基于Vue.js开发的系统，主要功能是监控其他系统的运行情况。</p>
     <h2>技术栈</h2>
     <ul>
        <li v-for="item in skills">
          {{ item }}
        </li>
     </ul>
  </div>
</template>

<script>
import { LayoutMixin } from '@/mixins'
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeLeftMenu: 'about',
      openLeftMenus: ['about'],
      skills: ['Vue.js', 'Vue-router']
    }
  }
}
</script>

<style lang="less" scoped>
  .about {
    h1 {
      font-size: 26px;
      font-weight: 400;
    }
    p {
      font-size: 14px;
      padding: 10px 0;
    }
  }
</style>