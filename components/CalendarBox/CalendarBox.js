// components/CalendarBox/CalendarBox.js
var util = require('../../utils/util.js')

Component({
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
    month: util.formatTime(new Date()),
    years: new Date().getFullYear(),
    months: new Date().getMonth() + 1
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
  }
})
