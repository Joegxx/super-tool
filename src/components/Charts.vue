<template>
  <div :id="id"></div>
</template>

<script>
import echarts from 'ec/echarts'
import 'ec/chart/bar'
import 'ec/chart/line'
import 'echarts/theme/macarons'
export default {
  props: ['id', 'options', 'loading'],
  data () {
    return {
      chart: null
    }
  },
  watch: {
    options () {
      this.reload()
    },
    loading () {
      this.setLoading()
    }
  },
  mounted () {
    this.chart = echarts.init(document.getElementById(this.id), 'macarons')
    this.setLoading()
    const defaults = {
      grid: {
        top: 40,
        right: 40,
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
        const opt = options[key]
        if (opt) {
          if (Array.isArray(opt)) {
            const newOpt = []
            opt.forEach(item => {
              newOpt.push(Object.assign({}, item, defaults[key]))
            })
            defaults[key] = newOpt
          } else {
            Object.assign(defaults[key], options[key])
          }
        }
      })
      Object.assign(options, defaults)
      return options
    }
    merge(defaults, this.options)
    this.chart.setOption(this.options)
    this.chart.on('click', params => {
      this.$emit('click', params)
    })
  },
  methods: {
    resize () {
      this.chart && this.chart.resize()
    },
    reload () {
      this.chart.setOption(this.options)
    },
    setLoading () {
      if (this.loading) {
        this.chart.showLoading({
          text: '加载中...',
          color: '#2d8cf0'
        })
      } else {
        this.chart.hideLoading()
      }
    }
  }
}
</script>

