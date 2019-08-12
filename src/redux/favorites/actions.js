import favoritesAC from './action-creators'

const toggle = (eventID = '') => async (dispatch) => {
  dispatch(favoritesAC.toggle(eventID));
}

export default {
  toggle
}
