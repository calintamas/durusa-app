import timetableAC from './action-creators'
import timetableSelectors from './selectors'

const setHeaderTab = (headerIndex) => (dispatch, getState) => {
  const prevHeaderIndex = timetableSelectors.getHeaderIndex(getState());
  if (prevHeaderIndex === headerIndex) {
    return
  }
  dispatch(timetableAC.setHeaderTab(headerIndex))
}

export default {
  setHeaderTab
}
