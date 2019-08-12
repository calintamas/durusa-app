import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import locationsSelectors from '../../redux/locations/selectors'
import favoritesSelectors from '../../redux/favorites/selectors'
import timetableSelectors from '../../redux/timetable/selectors'
import timetableActions from '../../redux/timetable/actions'

import Timetable from './index'

const mapStateToProps = (state) => ({
  locations: locationsSelectors.getAll(state),
  header: timetableSelectors.getHeader(state),
  favorites: favoritesSelectors.getAll(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setHeaderTab: timetableActions.setHeaderTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Timetable)
