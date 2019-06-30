import { apiStateCreator } from 'reddeck'

import appTypes from './types'

const initialState = {
  setup: apiStateCreator()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case appTypes.INITIAL_SETUP:
      return ({
        ...state,
        setup: apiStateCreator({ pending: true })
      })

    case appTypes.INITIAL_SETUP_ERROR:
      return ({
        ...state,
        setup: apiStateCreator({ error: true })
      })

    case appTypes.INITIAL_SETUP_SUCCESS:
      return ({
        ...state,
        setup: apiStateCreator({ success: true })
      })

    default:
      return state
  }
}
