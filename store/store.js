import {action, observable} from 'mobx-miniprogram'

export const store = observable({
  year: new Date().getFullYear(),
  selectMonth: new Date().getMonth() + 1,
  day: new Date().getDate(),

  modifyYear:action(function(year) {
    this.year = year;
  }),
  changesIn:action(function(selectMonth) {
    this.selectMonth = selectMonth
  }),
  modificationDate:action(function(day) {
    this.day = day
  })
})