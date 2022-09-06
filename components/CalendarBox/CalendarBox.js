// components/CalendarBox/CalendarBox.js
// var util = require('../../utils/util.js')
// component.js
const computedBehavior = require('miniprogram-computed').behavior

Component({
  behaviors: [computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    nowYear: new Date().getFullYear(),
    months: new Date().getMonth() + 1,
    month_s: 12,
    day: new Date().getDate(),
    year: new Date().getFullYear(),
    selectMonth: new Date().getMonth() + 1
  },
  computed: {
    getMonths(data) {
      if (data.year == data.nowYear) {
        return new Date().getMonth() + 1
      }else {
        return +12
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹出框
    disableDisplayLayer() {
      this.setData({
        show: false
      })
    },
    // 顶部日期点击打开弹出框
    switchDate() {
      this.setData({
        show: true
      })
    },
    // 弹出层上一年
    lastYear() {
      this.setData({
        year: this.data.year - 1
      })
    },
    // 弹出层下一年
    nextYear() {
      if (this.data.year != this.data.nowYear) {
        this.setData({
          year: this.data.year + 1
        })
      }
    },
    // 点击选择月份
    clickOnSelectMonth(e) {
      this.setData({
        selectMonth: e.currentTarget.dataset.month + 1,
        show: false
      })
    }
  }
})
