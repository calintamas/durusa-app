import { asyncActionCreator } from 'reddeck'
import appTypes from './types'

const initialSetup = asyncActionCreator(
  appTypes.INITIAL_SETUP,
  appTypes.INITIAL_SETUP_SUCCESS,
  appTypes.INITIAL_SETUP_ERROR
)

export default {
  initialSetup
}
