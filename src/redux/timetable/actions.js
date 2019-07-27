import timetableAC from './action-creators'

const setHeaderTab = (headerIndex) => (dispatch) => {
  dispatch(timetableAC.setHeaderTab(headerIndex))
}

export default {
  setHeaderTab
}
