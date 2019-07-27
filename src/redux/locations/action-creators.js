import { asyncActionCreator } from 'reddeck'
import locationsTypes from './types'

const get = asyncActionCreator(
  locationsTypes.GET,
  locationsTypes.GET_SUCCESS,
  locationsTypes.GET_ERROR
)

export default {
  get
}
