const getNavigationState = (state) => state.app.navigation_state
const getCurrentBottomTab = (state) => getNavigationState(state).current_tab

export default {
  getNavigationState,
  getCurrentBottomTab
}
