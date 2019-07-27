import locationsAC from './action-creators'
import locationsAPI from '../../api/locations'

const get = () => async (dispatch) => {
  try {
    dispatch(locationsAC.get.pending());

    const data = await locationsAPI.get();
    dispatch(locationsAC.get.success(data));
    return Promise.resolve();
  } catch (err) {
    dispatch(locationsAC.get.error(err));
    return Promise.reject();
  }
}

export default {
  get
}
