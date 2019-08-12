import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import favoritesTypes from './types'

const initialState = {
  all: {
    data: []
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case favoritesTypes.TOGGLE: {
      const eventID = action.payload;
      const isFavorited = state.all.data.indexOf(eventID) >= 0;
      let newData = [...state.all.data];
      if (isFavorited) {
        newData = newData.filter((i) => i !== eventID)
      } else {
        newData = [...newData, eventID]
      }

      return ({
        ...state,
        all: {
          ...state.all,
          data: newData
        }
      })
    }

    default:
      return state
  }
}

const persistConfig = {
  key: 'favorites_reducer',
  storage: AsyncStorage,
  timeout: 0
}
export default persistReducer(persistConfig, reducer)
