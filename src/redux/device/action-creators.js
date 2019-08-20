import { actionCreator } from 'reddeck'
import deviceTypes from './types'

const setToken = actionCreator(deviceTypes.SET_TOKEN)

export default {
  setToken
}
