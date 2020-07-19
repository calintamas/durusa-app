import config from '../../config';
import Time from '../../services/time';
import timetableTypes from './types';

const initialState = {
  header: {
    index: Time.getCurrentFestivalDayIndex(config.days, {
      switchHour: config.switch_day_hour
    }),
    routes: config.days
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case timetableTypes.SET_HEADER_TAB: {
      return {
        ...state,
        header: {
          ...state.header,
          index: action.payload
        }
      };
    }

    default:
      return state;
  }
};
