<template>
  <div class="about">
    <h1>关于SuperTool</h1>
    <p>辅助运维工具，功能包括组织结构，日志查看，访问统计，接口列表。系统采用前后端分离模式，前端基于Vue.js，后端基于Koa+MongoDB。</p>
    <h2>技术栈</h2>
    <ul class="skills">
      <li v-for="item in skills" :key="item">
        {{ item }}
      </li>
    </ul>
    <h2>GitHub</h2>
    <p><Icon type="social-github" /><a href="https://github.com/igonglei/super-tool" target="_blank">SuperTool(前端)</a></p>
    <p><Icon type="social-github" /><a href="https://github.com/igonglei/super-tool-server" target="_blank">SuperTool-Server(后端)</a></p>
  </div>
</template>

<script>
import { LayoutMixin } from '@/mixins'
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeTopMenu: 'about',
      skills: ['Vue.js', 'Vue-router', 'Vuex', 'iView', 'Koa', 'MongoDB', 'Webpack', 'ES6', 'Less', 'mxGraph', 'ECharts', 'Axios', 'Swagger-UI']
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