<template>
  <div id="swagger-ui"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'
export default {
  props: ['url'],
  mounted () {
    SwaggerUI({
      url: this.url,
      dom_id: '#swagger-ui',
      onComplete: () => {
        this.$emit('onComplete')
      }
    })
  }
}
</script>

<style>
  #swagger-ui .swagger-ui .wrapper {
    padding: 0;
  }
</style>
