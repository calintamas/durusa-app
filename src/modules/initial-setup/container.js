import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import appActions from '../../redux/app/actions';
import InitialSetup from './index';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      initialSetup: appActions.initialSetup
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(InitialSetup);
