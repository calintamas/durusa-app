import moment from './moment'
import { addZeroPrefix } from '../../utils/string'

class Time {
  static _getNow(someDate = null) {
    return someDate ? moment(someDate) : moment()
  }

  static getScheduleDate(startDate) {
    if (!startDate) {
      return null
    }
    
    const now = this._getNow();
    const eventDate = moment(startDate);
    const halfHourBeforeEventDate = moment(startDate).subtract(30, 'minutes');

    if (now.isAfter(eventDate) || now.isAfter(halfHourBeforeEventDate)) {
      return null
    }
    return halfHourBeforeEventDate.toDate()
  }

  static getHour(date = '') {
    return moment(date).format('kk:mm')
  }

  static getEventHours(startDate, endDate) {
    if (!startDate || !endDate) {
      return 'All day'
    }
    return `${this.getHour(startDate)} - ${this.getHour(endDate)}`
  }

  static getEventDate(startDate, endDate) {
    if (!startDate || !endDate) {
      return 'All day'
    }
    const hours = this.getEventHours(startDate, endDate);
    return `${moment(startDate).format('dddd D')}, ${hours}`
  }

  static getRelativeDate(date = '') {
    return moment(date).calendar(null, {
      sameDay: function (now) {
        return `[${this.from(now)}]`
      },
      sameElse: 'DD.MM.YYYY'
    })
  }

  static getFestivalDay(date = '') {
    return moment(date).format('DD.MM')
  }

  static getCurrentFestivalDayIndex(days = [], options = {}) {
    const switchHour = options.switchHour || 10;

    try {
      const now = this._getNow(options.now);
      const currentDate = now.format('YYYY-MM-DD');

      let festivalDayIndex = days.findIndex((item) => item.date === currentDate);

      const shouldShowNextDay = now.isAfter(this._getNow(options.now).hour(switchHour));
      if (!shouldShowNextDay) {
        festivalDayIndex -= 1
      }

      if (festivalDayIndex < 0) {
        throw new Error('Not a festival day 😞')
      }

      return festivalDayIndex
    } catch (err) {
      return 0
    }
  }

  static getFestivalStartDate(days = [], options = {}) {
    const startHour = options.start_hour || 12;
    return moment(this.getFirstDay(days)).hour(startHour).format()
  }

  static getFirstDay(days = []) {
    return days[0].date
  }

  static isFestivalDay(days = [], options = {}) {
    try {
      const now = this._getNow(options.now);
      const currentDate = now.format('YYYY-MM-DD');
      return !!days.find((item) => item.date === currentDate);
    } catch (err) {
      return false
    }
  }

  static isBeforeFestival(days = [], options = {}) {
    try {
      const now = this._getNow(options.now);
      const firstDay = moment(this.getFirstDay(days));
      return now.isBefore(firstDay);
    } catch (err) {
      return false
    }
  }

  static getDistanceToDate(date = '') {
    const countDownDate = new Date(date).getTime();
    const now = new Date().getTime();

    const distance = countDownDate - now;

    if (distance < 0) {
      return null
    }

    // Time calculations for days, hours, minutes and seconds
    // https://www.w3schools.com/howto/howto_js_countdown.asp
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return ({
      days: addZeroPrefix(days),
      hours: addZeroPrefix(hours),
      minutes: addZeroPrefix(minutes),
      seconds: addZeroPrefix(seconds),
    })
  }
}

export default Time
