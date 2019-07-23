import appAC from './action-creators'
import Navigation from '../../services/navigation'

const initialSetup = (navigationRef) => (dispatch) => {
  try {
    dispatch(appAC.initialSetup.pending());

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
