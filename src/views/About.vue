<template>
  <div class="about">
    <h1>关于SuperTool</h1>
    <p>SuperTool是基于Vue.js开发的系统，主要功能是监控其他系统的运行情况。</p>
    <h2>技术栈</h2>
    <ul class="skills">
      <li v-for="item in skills">
        {{ item }}
      </li>
    </ul>
    <h2>源代码</h2>
    <p><Icon type="social-github"></Icon><a href="https://github.com/igonglei/super-tool" target="_blank">SuperTool</a></p>
    <h2>其他作品</h2>
    <p><img  src="../assets/cui.png"><a href="https://igonglei.github.io/clean-ui" target="_blank">CleanUI</a></p>
  </div>
</template>

<script>
import { LayoutMixin } from '@/mixins'
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeTopMenu: 'about',
      skills: ['Vue.js', 'Vue-router', 'Vuex', 'Vue-cli', 'iView', 'Webpack', 'ES6', 'Less', 'ECharts', 'Axios']
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
      padding: 10px;
      >i {
        font-size: 20px;
        vertical-align: middle;
      }
      >a {
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        line-height: 20px;
      }
      >img {
        height: 20px;
        vertical-align: middle;
        padding: 2px 1px;
      }
    }
    h2 {
      margin-top: 10px;
    }
    .skills {
      padding: 10px 30px;
      font-size: 14px;
      >li {
        margin-bottom: 5px;
      }
    }
}
</style>