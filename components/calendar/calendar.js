// components/calendar/calendar.js
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
    day_date: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    lastDay: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
    week: new Date(new Date().getFullYear() + new Date().getMonth() + 1 + 1).getDay(),
    day: new Date().getDate()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    calendarDays(e) {
      console.log(e);
      this.setData({
        day: e.currentTarget.dataset.mothnum + 1
      });
      console.log(this.data.day);
    }
  },

  lifetimes: {
    // 组件初始化完毕 进入页面节点树后触发
    // attached: function() {
    //   console.log(this.data.lastDay);
    //   console.log(this.data.week);
    // }
  }
})