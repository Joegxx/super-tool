<template>
  <div>
    <ul class='search-panel'>
      <li>
        <div>
          <span>时间</span>
          <Radio-group v-model='currentDateType' type='button' class='search-date-type'>
            <Radio v-for='item in DATETYPES' :label='item.value' :key='item'>{{ item.text }}</Radio>
          </Radio-group>
          <Date-picker v-model='currentDate' type='daterange' placeholder='选择日期' class='search-date' :editable='false' @on-open-change='currentDateType=-1'></Date-picker>
        </div>
      </li>
    </ul>
    <charts id='project-chart' class='visit-chart' :options="projectChartOptions" ref="projectChart"></charts>
    <charts id='module-chart' class='visit-chart' :options="moduleChartOptions" ref="moduleChart"></charts>
  </div>
</template>

<script>
import Charts from '@/components/Charts'
import { LayoutMixin } from '@/mixins'
const DATETYPES = [
  {
    text: '最近一周',
    value: 0
  },
  {
    text: '最近一月',
    value: 1
  },
  {
    text: '自定义',
    value: -1
  }
]
export default {
  mixins: [LayoutMixin],
  components: { Charts },
  data () {
    return {
      activeTopMenu: 'home',
      openLeftMenus: ['operations'],
      currentDateType: -1,
      currentDate: ['2017-06-01', '2017-06-03'],
      DATETYPES,
      projectChartOptions: {
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      moduleChartOptions: {
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  watch: {
    currentDateType () {
      let [start, end] = this.currentDate
      const fmt = 'YYYY-MM-DD'
      const now = this.$moment().format(fmt)
      switch (this.currentDateType) {
        case 0:
          end = now
          start = this.$moment().subtract(6, 'days').format(fmt)
          break
        case 1:
          end = now
          start = this.$moment().subtract(1, 'months').format(fmt)
          break
      }
      this.currentDate = [start, end]
    }
  },
  mounted () {
    const vm = this
    let timeout
    window.onresize = () => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        const charts = vm.$refs
        Object.keys(charts).forEach(key => {
          charts[key].resize()
        })
      }, 200)
    }
  }
}
</script>

<style lang='less' scoped>
.visit-chart {
  height: 300px;
}
</style>
