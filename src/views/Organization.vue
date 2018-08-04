<template>
  <div>
    <Spin fix v-if="loading"></Spin>
    <Organization id="organization" :data="data" ref="organization"></Organization>
  </div>
</template>

<script>
import { LayoutMixin } from '@/mixins'
import { GET_ORGANIZATION } from '@/store/types'
import Organization from '@/components/Organization'
export default {
  mixins: [LayoutMixin],
  components: { Organization },
  data () {
    return {
      activeTopMenu: 'home',
      loading: true
    }
  },
  computed: {
    data () {
      return this.$store.state.Organization.data
    }
  },
  created () {
    this.getOrganization()
  },
  methods: {
    getOrganization () {
      this.$store.dispatch(GET_ORGANIZATION).then(data => {
        this.loading = false
      })
    },
    resize () {
      this.$refs.organization.resize()
    }
  }
}
</script>
