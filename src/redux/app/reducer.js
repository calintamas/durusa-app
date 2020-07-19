import { apiStateCreator } from 'reddeck';

import appTypes from './types';

const initialState = {
  setup: apiStateCreator(),

  navigation_state: {
    current_tab: '',
    current_tab_index: null,
    current_screen: '',
    prev_screen: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case appTypes.INITIAL_SETUP: {
      return {
        ...state,
        setup: apiStateCreator({ pending: true })
      };
    }

    case appTypes.INITIAL_SETUP_ERROR: {
      return {
        ...state,
        setup: apiStateCreator({ error: true })
      };
    }

    case appTypes.INITIAL_SETUP_SUCCESS: {
      return {
        ...state,
        setup: apiStateCreator({ success: true })
      };
    }

    case appTypes.SET_NAV_STATE: {
      return {
        ...state,
        navigation_state: action.payload
      };
    }

    default:
      return state;
  }
};
