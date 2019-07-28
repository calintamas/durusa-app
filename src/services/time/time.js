import moment from './moment'

class Time {
  static getHour(date = '') {
    return moment(date).format('k:mm')
  }

  static getRelativeDate(date = '') {
    return moment(date).calendar(null, {
      sameDay: function (now) {
        return `[${this.from(now)}]`
      }
    })
  }
}

export default Time
