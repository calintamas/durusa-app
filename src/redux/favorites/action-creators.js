import { actionCreator } from 'reddeck'
import favoritesTypes from './types'

const toggle = actionCreator(favoritesTypes.TOGGLE)

export default {
  toggle
}
