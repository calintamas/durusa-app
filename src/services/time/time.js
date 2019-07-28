import moment from './moment'
import { addZeroPrefix } from '../../utils/string'

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

  static getFestivalDay(date = '') {
    return moment(date).format('DD.MM')
  }

  static getCurrentFestivalDayIndex(days = [], options = {}) {
    const switchHour = options.switchHour || 10;

    try {
      const now = moment();
      const currentDate = now.format('YYYY-MM-DD');

      let festivalDayIndex = days.findIndex((item) => item.date === currentDate);

      const shouldShowNextDay = now.isAfter(moment().hour(switchHour));
      if (!shouldShowNextDay) {
        festivalDayIndex -= 1
      }

      if (festivalDayIndex === -1) {
        throw new Error('Not a festival day 😞')
      }

      return festivalDayIndex
    } catch (err) {
      return 0
    }
  }

  static getFirstDay(days = []) {
    return days[0].date
  }

  static isFestivalDay(days = []) {
    const currentDate = moment().format('YYYY-MM-DD');
    return !!days.find((item) => item.date === currentDate);
  }

  static isBeforeFestival(days = []) {
    const firstDay = moment(this.getFirstDay(days));
    const now = moment();
    return now.isBefore(firstDay);
  }

  static getDistanceToDate(date = '') {
    const countDownDate = new Date(date).getTime();
    const now = new Date().getTime();

    const distance = countDownDate - now;

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
