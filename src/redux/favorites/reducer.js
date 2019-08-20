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
    case favoritesTypes.ADD: {
      const { eventID } = action.payload;

      return ({
        ...state,
        all: {
          ...state.all,
          data: [...state.all.data, eventID]
        }
      })
    }

    case favoritesTypes.REMOVE: {
      const { eventID } = action.payload;

      return ({
        ...state,
        all: {
          ...state.all,
          data: state.all.data.filter((i) => i !== eventID)
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
