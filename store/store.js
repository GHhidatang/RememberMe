import {action, observable} from 'mobx-miniprogram'

export const store = observable({
  year: new Date().getFullYear(),
  selectMonth: new Date().getMonth() + 1,
  day: new Date().getDate(),
  lastDay: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
  week: new Date(new Date().getFullYear() + new Date().getMonth() + 1 + 1).getDay(),

  modifyYear:action(function(year) {
    this.year = year;
    this.lastDay = new Date(this.year, this.selectMonth, 0).getDate();
    this.week = new Date(this.year + this.selectMonth + 1).getDay();
  }),
  changesIn:action(function(selectMonth) {
    this.selectMonth = selectMonth;
    this.lastDay = new Date(this.year, this.selectMonth, 0).getDate();
    this.week = new Date(this.year + this.selectMonth + 1).getDay();
  }),
  modificationDate:action(function(day) {
    this.day = day;
  })
})