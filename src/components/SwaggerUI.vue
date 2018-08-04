<template>
  <div :id="id"></div>
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

