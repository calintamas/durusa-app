import timetableAC from './action-creators'
import timetableSelectors from './selectors'
import EmailRequest from '../../services/email-request'

const setHeaderTab = (headerIndex) => (dispatch, getState) => {
  const prevHeaderIndex = timetableSelectors.getHeaderIndex(getState());
  if (prevHeaderIndex === headerIndex) {
    return
  }
  dispatch(timetableAC.setHeaderTab(headerIndex))
  EmailRequest.showModal(headerIndex);
}

export default {
  setHeaderTab
}
