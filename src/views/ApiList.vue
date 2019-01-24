<template>
  <VueSwaggerUI id="swagger-ui" url="static/data/swagger.json" @onComplete='setContentHeight' />
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
