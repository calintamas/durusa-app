import { connect } from 'react-redux'

import timetableSelectors from '../../redux/timetable/selectors'
import Home from './index'

const mapStateToProps = (state) => ({
  days: timetableSelectors.getDays(state)
})

export default connect(mapStateToProps, null)(Home)
