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
}

export default Time
