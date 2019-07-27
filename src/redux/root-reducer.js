import { combineReducers } from 'redux'

import app from './app/reducer'
import locations from './locations/reducer'

export default combineReducers({
  app,
  locations
})
