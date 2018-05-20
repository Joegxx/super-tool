<template>
  <ul class="cards">
    <li v-for="item in curChildMenus" :key="item.name" @click="$router.push({name:item.name})">
      <Card>
        <div class="tc">
            <Icon :type="item.icon" :size="80" :color="item.color"></Icon>
            <p>{{ item.text }}</p>
        </div>
      </Card>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import { LayoutMixin } from '@/mixins'
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeLeftMenu: '',
      openLeftMenus: ['operations']
    }
  },
  computed: {
    ...mapGetters(['curChildMenus'])
  }
}
</script>

<style scoped>
.cards > li {
  float: left;
  width: 300px;
  margin-right: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  list-style: none;
}
.tc {
  text-align: center;
}
@media (max-width: 768px) {
  .cards > li {
    width: 100%;
  }
}
</style>
