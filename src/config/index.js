import env from '../../env.json';

const config = {
  days: [
    {
      key: 'day1',
      title: 'Friday 23',
      date: '2019-08-23'
    },
    {
      key: 'day2',
      title: 'Saturday 24',
      date: '2019-08-24'
    },
    {
      key: 'day3',
      title: 'Sunday 25',
      date: '2019-08-25'
    }
  ],
  switch_day_hour: 10, // hour after which a new festival day starts 🙈
  festival_start_hour: 12,

  firebase_sender_id: env.FIREBASE_SENDER_ID
};

export default config;
