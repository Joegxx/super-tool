<template>
  <div>
    <ul class="search-panel">
      <li>
        <div>
          <span>类别</span>
          <Select v-model="currentType" class="log-type">
            <Option v-for="item in types" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </div>
        <div>
          <span>级别</span>
          <RadioGroup v-model="currentLevel" type="button" class="log-level">
            <Radio :label="-1">全部</Radio>
            <Radio v-for="(item,index) in levels" :label="index" :key="index">{{ item.text }}</Radio>
          </RadioGroup>
        </div>
        <div class="search-box">
          <Input v-model="searchText" icon="ios-search" placeholder="请输入日志信息..."></Input>
        </div>
      </li>
      <li>
        <div>
          <span>时间</span>
          <RadioGroup v-model="currentDateType" type="button" class="search-date-type">
            <Radio v-for="item in DATETYPES" :label="item.value" :key="item.value">{{ item.text }}</Radio>
          </RadioGroup>
          <DatePicker v-model="currentTime" type="datetimerange" placeholder="选择日期和时间" class="search-date" :editable="false" @on-change="getLogs" @on-open-change='currentDateType=-1'></DatePicker>
        </div>
      </li>
    </ul>
    <Table border :loading="loading" :columns="columns" :data="rows" @on-sort-change="sortLogs"></Table>
    <Page :total="total" :current="currentPage" :page-size="pageSize" @on-change="changePage" show-elevator show-total class="pager"></Page>
  </div>
</template>

<script>
import { LayoutMixin } from '@/mixins'
import { GET_LOGS } from '@/store/types'
const LEVEL = [
  {
    text: '一般',
    icon: 'ios-information-circle',
    color: '#39f',
    type: 'info'
  },
  {
    text: '警告',
    icon: 'ios-alert',
    color: '#f90',
    type: 'warning'
  },
  {
    text: '错误',
    icon: 'ios-close-circle',
    color: '#f30',
    type: 'error'
  }
]
const DATETYPES = [
  {
    text: '今天',
    value: 0
  },
  {
    text: '最近三天',
    value: 1
  },
  {
    text: '自定义',
    value: -1
  }
]
const dataTimeRange = ['2017-04-06 16:00:00', '2017-04-06 17:00:00']
const fmt = 'YYYY-MM-DD HH:mm:ss'
const types = ['SuperEnvMall.Server', 'SuperIT.Server']
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeTopMenu: 'home',
      loading: true,
      columns: [
        {
          title: '时间',
          key: 'time',
          sortable: 'custom',
          maxWidth: 200,
          ellipsis: true
        },
        {
          title: '级别',
          key: 'level',
          width: 80,
          align: 'center',
          render: (h, params) => {
            let lv = LEVEL[params.row.level]
            return h('div', {
              style: {
                color: lv.color
              }
            }, [
              h('Icon', {
                props: {
                  type: lv.icon
                },
                style: {
                  fontSize: '14px',
                  marginRight: '5px'
                }
              }),
              h('span', lv.text)
            ])
          }
        },
        {
          title: '主机',
          key: 'ip',
          maxWidth: 200,
          ellipsis: true
        },
        {
          title: '消息',
          key: 'message',
          ellipsis: true
        },
        {
          title: '操作',
          key: 'action',
          width: 80,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '查看')
            ])
          }
        }
      ],
      levels: LEVEL,
      types,
      currentPage: 1,
      pageSize: 10,
      currentType: types[0],
      currentLevel: -1,
      DATETYPES,
      currentDateType: -1,
      currentTime: dataTimeRange,
      searchText: '',
      sortKey: 'time',
      order: 'desc'
    }
  },
  computed: {
    rows () {
      return this.$store.state.Log.rows
    },
    total () {
      return this.$store.state.Log.total
    },
    formatCurrentTime () {
      let format = time => {
        return time && this.$moment(time).format(fmt)
      }
      let [start, end] = this.currentTime
      return [format(start), format(end)]
    }
  },
  created () {
    this.getLogs()
  },
  watch: {
    currentType () {
      this.getLogs()
    },
    currentLevel () {
      this.getLogs()
    },
    searchText () {
      this.getLogs()
    },
    currentDateType () {
      let range = dataTimeRange
      let now = this.$moment().endOf('day').format(fmt)
      switch (this.currentDateType) {
        case 0:
          range = [this.$moment().startOf('day').format(fmt), now]
          break
        case 1:
          range = [this.$moment().subtract(2, 'days').startOf('day').format(fmt), now]
          break
      }
      this.currentTime = range
      this.getLogs()
    }
  },
  methods: {
    getLogs () {
      this.loading = true
      this.$store.dispatch(GET_LOGS, {
        page: {
          current: this.currentPage,
          size: this.pageSize
        },
        query: {
          type: this.currentType,
          level: this.currentLevel,
          time: this.formatCurrentTime,
          text: this.searchText
        },
        sort: {
          key: this.sortKey,
          order: this.order
        }
      }).then(() => {
        this.loading = false
        this.setContentHeight()
      })
    },
    show (index) {
      let row = this.rows[index]
      let lv = LEVEL[row.level]
      this.$Modal[lv.type]({
        title: '日志详情',
        content: `时间：${row.time}<br>主机：${row.ip}<br>消息：${row.message}`
      })
    },
    changePage (currentPage) {
      this.currentPage = currentPage
      this.getLogs()
    },
    sortLogs ({ key, order }) {
      if (order === 'normal') {
        return
      }
      this.sortKey = key
      this.order = order
      this.getLogs()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/searchPanel.less';
.pager {
  padding: 20px 0;
  text-align: center;
}
.log-type {
  width: 212px;
}
.search-date {
  width: 300px;
}
.log-level {
  vertical-align: middle;
}
.search-box {
  float: right;
  width: 300px;
  padding-right: 0;
}
@media (max-width: 768px) {
  .search-box {
    float: left;
  }
}
</style>
