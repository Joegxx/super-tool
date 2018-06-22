<template>
  <div>
    <ul class="search-panel">
      <li>
        <div>
          <span>时间</span>
          <RadioGroup v-model="currentDateType" type="button" class="search-date-type">
            <Radio v-for="item in DATETYPES" :label="item.value" :key="item.value">{{ item.text }}</Radio>
          </RadioGroup>
          <DatePicker v-model="currentDate" type="daterange" placeholder="选择日期" class="search-date" :editable="false" @on-change="getProjectVistis" @on-open-change="currentDateType=-1"></DatePicker>
        </div>
      </li>
    </ul>
    <charts id="project-chart" class="visit-chart" :options="projectChartOptions" :loading="projectLoading" ref="projectChart" @click="clickProject"></charts>
    <charts v-if="showModuleChart" id="module-chart" class="visit-chart" :options="moduleChartOptions" :loading="moduleLoading" ref="moduleChart"></charts>
  </div>
</template>

<script>
import Charts from '@/components/Charts'
import { LayoutMixin } from '@/mixins'
import { GET_VISITS } from '@/store/types'
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
const barStyle = {
  type: 'bar',
  barMaxWidth: 40,
  itemStyle: {
    normal: {
      barBorderRadius: [5, 5, 0, 0]
    }
  }
}
const dateRange = ['2017-06-01', '2017-06-03']
const fmt = 'YYYY-MM-DD'
const projectNames = ['SuperIT', 'SuperEnvMall', 'SuperLAB']
export default {
  mixins: [LayoutMixin],
  components: { Charts },
  data () {
    return {
      activeTopMenu: 'home',
      currentDateType: -1,
      currentDate: dateRange,
      DATETYPES,
      showModuleChart: false
    }
  },
  computed: {
    projectChartOptions () {
      let series = []
      let { xData, yData } = this.$store.state.Visit.projectData
      for (let name of projectNames) {
        series.push({
          name: name,
          ...barStyle,
          data: yData[name]
        })
      }
      let totalSerie = {
        type: 'line',
        name: '总人数',
        data: []
      }
      for (let i in xData) {
        let sum = 0
        for (let oSerie of series) {
          sum += oSerie.data[i]
        }
        totalSerie.data.push(sum)
      }
      series.push(totalSerie)
      return {
        legend: {
          data: [...projectNames, totalSerie.name]
        },
        xAxis: {
          data: xData
        },
        yAxis: {
          type: 'value',
          name: '人数'
        },
        series
      }
    },
    projectLoading () {
      return this.$store.state.Visit.projectLoading
    },
    moduleChartOptions () {
      let { xData, yData } = this.$store.state.Visit.moduleData
      let moduleQuery = this.$store.state.Visit.moduleQuery
      return {
        title: {
          text: `日期：${moduleQuery.date} 项目：${moduleQuery.project || '全部'}`,
          textStyle: {
            fontSize: 12
          },
          left: 'center',
          top: 10
        },
        xAxis: {
          data: xData
        },
        yAxis: {
          type: 'value',
          name: '人数'
        },
        series: [{
          name: '人数',
          ...barStyle,
          data: yData
        }]
      }
    },
    moduleLoading () {
      return this.$store.state.Visit.moduleLoading
    },
    formatCurrentDate () {
      let format = date => {
        return date && this.$moment(date).format(fmt)
      }
      let [start, end] = this.currentDate
      return [format(start), format(end)]
    }
  },
  created () {
    this.getProjectVistis()
  },
  watch: {
    currentDateType () {
      let range = dateRange
      let now = this.$moment().format(fmt)
      switch (this.currentDateType) {
        case 0:
          range = [this.$moment().subtract(6, 'days').format(fmt), now]
          break
        case 1:
          range = [this.$moment().subtract(1, 'months').format(fmt), now]
          break
      }
      this.currentDate = range
      this.getProjectVistis()
    }
  },
  methods: {
    getProjectVistis () {
      this.showModuleChart = false
      this.$store.dispatch(GET_VISITS, {
        projectLoading: true,
        projectQuery: {
          names: projectNames,
          date: this.formatCurrentDate
        },
        moduleQuery: {}
      }).then(() => {
        this.setContentHeight()
      })
    },
    clickProject ({ seriesName, name }) {
      this.showModuleChart = true
      this.$store.dispatch(GET_VISITS, {
        moduleLoading: true,
        moduleQuery: {
          project: seriesName === '总人数' ? undefined : seriesName,
          date: name
        }
      }).then(() => {
        this.setContentHeight()
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/searchPanel.less';
.visit-chart {
  height: 400px;
  padding-top: 10px;
}
</style>
