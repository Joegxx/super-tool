<template>
  <div>
    <Table border :columns="columns" :data="rows"></Table>
  </div>
</template>

<script>
import { LayoutMixin } from '@/mixins'
import { GET_LOGS } from '@/store/types'
const LEVEL = [
  {
    text: '一般',
    icon: 'information-circled',
    color: '#39f',
    type: 'info'
  },
  {
    text: '警告',
    icon: 'android-alert',
    color: '#f90',
    type: 'warning'
  },
  {
    text: '错误',
    icon: 'close-circled',
    color: '#f30',
    type: 'error'
  }
]
export default {
  mixins: [LayoutMixin],
  data () {
    return {
      activeTopMenu: 'home',
      openLeftMenus: ['operations'],
      columns: [
        {
          title: '时间',
          key: 'time'
        },
        {
          title: '级别',
          key: 'level',
          render: (h, params) => {
            const lv = LEVEL[params.row.level]
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
          key: 'ip'
        },
        {
          title: '消息',
          key: 'message',
          ellipsis: true
        },
        {
          title: '操作',
          key: 'action',
          width: 100,
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
      ]
    }
  },
  computed: {
    rows () {
      return this.$store.state.Log.rows
    }
  },
  created () {
    this.$store.dispatch(GET_LOGS)
  },
  methods: {
    show (index) {
      const row = this.rows[index]
      const lv = LEVEL[row.level]
      this.$Modal[lv.type]({
        title: '日志详情',
        content: `时间：${row.time}<br>主机：${row.ip}<br>消息：${row.message}`
      })
    }
  }
}
</script>
