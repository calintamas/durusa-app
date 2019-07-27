import { actionCreator } from 'reddeck'
import timetableTypes from './types'

const setHeaderTab = actionCreator(timetableTypes.SET_HEADER_TAB)

export default {
  setHeaderTab
}
