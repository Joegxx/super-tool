<template>
  <div :id="id"></div>
</template>

<script>
import echarts from 'ec/echarts'
import 'ec/chart/bar'
import 'ec/component/tooltip'
import 'echarts/theme/macarons'
export default {
  props: ['id', 'options'],
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.chart = echarts.init(document.getElementById(this.id), 'macarons')
    const defaults = {
      grid: {
        top: 10,
        right: 30,
        bottom: 40,
        left: 40
      },
      tooltip: {},
      xAxis: {
        axisTick: {
          show: false
        }
      },
      yAxis: {
        axisTick: {
          show: false
        }
      }
    }
    const merge = (defaults, options) => {
      Object.keys(defaults).forEach(key => {
        if (options[key]) {
          Object.assign(defaults[key], options[key])
        }
      })
      Object.assign(options, defaults)
      return options
    }
    merge(defaults, this.options)
    this.chart.setOption(this.options)
  },
  methods: {
    resize () {
      this.chart.resize()
    }
  }
}
</script>

