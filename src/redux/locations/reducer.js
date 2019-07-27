import { apiStateCreator } from 'reddeck'

import locationsTypes from './types'

const initialState = {
  all: {
    data: [],
    api: apiStateCreator()
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case locationsTypes.GET: {
      return ({
        ...state,
        all: {
          ...state.all,
          api: apiStateCreator({ pending: true })
        }
      })
    }

    case locationsTypes.GET_SUCCESS: {
      return ({
        ...state,
        all: {
          ...state.all,
          data: action.payload,
          api: apiStateCreator({ success: true })
        }
      })
    }

    case locationsTypes.GET_ERROR: {
      return ({
        ...state,
        all: {
          ...state.all,
          api: apiStateCreator({ error: true })
        }
      })
    }

    default:
      return state
  }
}
