import appAC from './action-creators'
import Navigation from '../../services/navigation'

const initialSetup = () => (dispatch) => {
  try {
    dispatch(appAC.initialSetup.pending());

    setTimeout(() => {
      dispatch(appAC.initialSetup.success());
      Navigation.getRef().navigate('Default');
    }, 2000)
  } catch (err) {
    dispatch(appAC.initialSetup.error(err));
  }
}

export default {
  initialSetup
}
