import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import favoritesSelectors from '../../redux/favorites/selectors';
import favoritesActions from '../../redux/favorites/actions';

import EventItem from './index';

const mapStateToProps = (state) => ({
  favorites: favoritesSelectors.getAll(state)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleFavorite: favoritesActions.toggle
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);
