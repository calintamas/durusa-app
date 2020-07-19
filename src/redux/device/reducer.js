import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import deviceTypes from './types';

const initialState = {
  token: null,
  os: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case deviceTypes.SET_TOKEN: {
      const { token, os } = action.payload;

      return {
        ...state,
        token,
        os
      };
    }

    default:
      return state;
  }
};

const persistConfig = {
  key: 'device_reducer',
  storage: AsyncStorage,
  timeout: 0
};
export default persistReducer(persistConfig, reducer);
