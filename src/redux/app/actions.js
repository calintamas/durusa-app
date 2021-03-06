import appAC from './action-creators'
import locationsActions from '../locations/actions'
import Navigation from '../../services/navigation'
import { Firestore } from '../../services/firebase'

const initialSetup = (navigationRef) => async (dispatch) => {
  try {
    dispatch(appAC.initialSetup.pending());

    await Firestore.signInAnonymously();
    await dispatch(locationsActions.get());

    Navigation.setRef(navigationRef);
    Navigation.getRef().navigate('Default');
    dispatch(appAC.initialSetup.success());
  } catch (err) {
    dispatch(appAC.initialSetup.error(err));
  }
}

const setNavigationState = (payload) => (dispatch) => {
  dispatch(appAC.setNavigationState(payload));
}

export default {
  initialSetup,
  setNavigationState
}
