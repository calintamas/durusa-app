import { connect } from 'react-redux'

import locationsSelectors from '../../redux/locations/selectors'
import Timetable from './index'

const mapStateToProps = (state) => ({
  locations: locationsSelectors.getAll(state)
})

export default connect(mapStateToProps, null)(Timetable)
