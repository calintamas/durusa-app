import { Alert } from 'react-native'

import deviceAC from './action-creators'
import deviceSelectors from './selectors'
import { Firestore } from '../../services/firebase'

const setToken = ({ token, os }) => async (dispatch, getState) => {
  const data = { token, os };

  const persistedToken = deviceSelectors.getToken(getState());
  Alert.alert('persisted token', `${persistedToken}`)
  console.log('persistedToken', persistedToken);

  if (persistedToken !== token) {
    Firestore.saveDeviceToken(data);
    dispatch(deviceAC.setToken(data));
  }
}

export default {
  setToken
}
