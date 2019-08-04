/* eslint-env jest */

import Time from '../index'

const days = [
  { date: '2019-08-23' },
  { date: '2019-08-24' },
  { date: '2019-08-25' }
];

describe('Time service', () => {
  it('Gets the correct fest day index, depending on now and switchHour', () => {
    const tests = [
      {
        input: {
          days,
          options: {
            now: '2019-08-23T08:00:00'
          },
        },
        output: 0
      },
      {
        input: {
          days,
          options: {
            now: '2019-08-24T12:00:00'
          },
        },
        output: 1
      },
      {
        input: {
          days,
          options: {
            now: '2019-08-24T07:00:00',
            switchHour: 8
          },
        },
        output: 0
      },
      {
        input: {
          days,
          options: {
            now: '2019-08-24T12:00:00',
            switchHour: 10
          },
        },
        output: 1
      },
      {
        input: {
          days,
          options: {
            now: '2019-08-20T12:00:00'
          },
        },
        output: 0
      },
      {
        input: {
          days,
          options: {
            now: '2019-08-29T12:00:00'
          },
        },
        output: 0
      },
      {
        input: {
          days: [],
        },
        output: 0
      },
      {
        input: {
          days: null,
        },
        output: 0
      }
    ];
    tests.forEach((item) => {
      expect(
        Time.getCurrentFestivalDayIndex(item.input.days, item.input.options)
      ).toBe(item.output)
    })
  });

  it('Returns true if today is a festival day', () => {
    const tests = [
      {
        input: {
          days,
          options: {
            now: '2019-08-23T12:00:00'
          },
        },
        output: true
      },
      {
        input: {
          days,
          options: {
            now: '2019-08-29T08:00:00'
          },
        },
        output: false
      },
      {
        input: {
          days: null,
          options: {
            now: '2019-08-23T08:00:00'
          },
        },
        output: false
      },
      {
        input: {
          days,
          options: {
            now: null
          },
        },
        output: false
      },
    ];
    tests.forEach((item) => {
      expect(
        Time.isFestivalDay(item.input.days, item.input.options)
      ).toBe(item.output)
    })
  })

  it('Returns true if today is before festival', () => {
    const tests = [
      {
        input: {
          days,
          options: {
            now: '2019-08-20T08:00:00'
          },
        },
        output: true
      },
      {
        input: {
          days,
          options: {
            now: '2019-08-29T08:00:00'
          },
        },
        output: false
      },
      {
        input: {
          days: null,
          options: {
            now: '2019-08-23T08:00:00'
          },
        },
        output: false
      },
      {
        input: {
          days,
          options: {
            now: null
          },
        },
        output: false
      },
    ];
    tests.forEach((item) => {
      expect(
        Time.isFestivalDay(item.input.days, item.input.options)
      ).toBe(item.output)
    })
  })
})
