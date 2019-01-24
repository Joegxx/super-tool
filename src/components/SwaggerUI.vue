<template>
  <div :id="id" class="vue-swagger-ui"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'
export default {
  props: ['url', 'id'],
  mounted () {
    SwaggerUI({
      url: this.url,
      dom_id: `#${this.id}`,
      onComplete: () => {
        this.$emit('onComplete')
      }
    })
  }
}
</script>

<style lang="less">
.vue-swagger-ui {
  .swagger-ui {
    .wrapper {
      padding: 0;
    }
    .opblock .opblock-summary-path {
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
    }
  }
}
</style>
