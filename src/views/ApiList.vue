<template>
  <VueSwaggerUI id="swagger-ui" url="static/data/swagger.json" @onComplete='setContentHeight'></VueSwaggerUI>
</template>

<script>
import { LayoutMixin } from '@/mixins'
import VueSwaggerUI from '@/components/SwaggerUI'
export default {
  mixins: [LayoutMixin],
  components: { VueSwaggerUI },
  data () {
    return {
      activeTopMenu: 'home'
    }
  }
}
</script>

<style>
  #swagger-ui .swagger-ui .wrapper {
    padding: 0;
  }
</style>
