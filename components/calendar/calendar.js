// components/calendar/calendar.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from "../../store/store"

Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      day: 'day', 
      lastDay: 'lastDay',
      week: 'week'
    },
    actions: {
      modificationDate: "modificationDate"
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    day_date: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    calendarDays(e) {
      this.modificationDate(e.currentTarget.dataset.mothnum + 1);
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