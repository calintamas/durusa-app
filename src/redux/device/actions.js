import deviceAC from './action-creators'
import deviceSelectors from './selectors'
import { Firestore } from '../../services/firebase'

const setToken = ({ token, os }) => async (dispatch, getState) => {
  const data = { token, os };

  const persistedToken = deviceSelectors.getToken(getState());

  if (persistedToken !== token) {
    Firestore.saveDeviceToken(data);
    dispatch(deviceAC.setToken(data));
  }
}

export default {
  setToken
}
