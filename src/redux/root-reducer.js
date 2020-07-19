import { combineReducers } from 'redux';

import app from './app/reducer';
import locations from './locations/reducer';
import timetable from './timetable/reducer';
import favorites from './favorites/reducer';
import device from './device/reducer';

export default combineReducers({
  app,
  locations,
  timetable,
  favorites,
  device
});
