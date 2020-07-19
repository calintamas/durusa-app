import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import timetableActions from '../../redux/timetable/actions';

import AppStateHandler from './index';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setTimetableHeaderTab: timetableActions.setHeaderTab
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(AppStateHandler);
