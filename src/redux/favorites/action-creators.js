import { actionCreator } from 'reddeck';
import favoritesTypes from './types';

const toggle = actionCreator(favoritesTypes.TOGGLE);
const add = actionCreator(favoritesTypes.ADD);
const remove = actionCreator(favoritesTypes.REMOVE);

export default {
  toggle,
  add,
  remove
};
