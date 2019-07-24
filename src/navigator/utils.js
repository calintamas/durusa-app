import store from '../redux/store'
import appSelectors from '../redux/app/selectors'

const getActiveRouteName = (navigationState) => {
  if (!navigationState) {
    return null
  }

  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

const getActiveTab = (navigationState) => {
  const defaultTab = {
    index: null,
    name: null
  };

  if (!navigationState) {
    return defaultTab
  }

  // navigationState is the root navigation
  // It's a stack that contains: ['InitialSetup', 'Default']
  const defaultStackIndex = 1;

  // If we are not in the 'Default' stack (containing tabs), just return
  if (navigationState.index !== defaultStackIndex) {
    return defaultTab
  }

  // The 'Default' tab navigator contains the following tabs: ['Home, 'Timetable', 'Menu']
  const tabs = navigationState.routes[navigationState.index];

  return ({
    index: tabs.index, // current tab index
    name: tabs.routes[tabs.index].routeName // current tab name
  })
}

const scrollTabToTop = (navigation) => {
  try {
    const index = navigation.state.index;
    if (index !== 0) {
      throw new Error('Not the first screen in stack')
    }

    const route = navigation.state.routes[index];
    const routeName = route.routeName;

    const currentBottomTab = appSelectors.getCurrentBottomTab(store.getState());
    if (routeName !== currentBottomTab) {
      throw new Error('Active route is not on the current tab')
    }

    route.params[`${route.routeName}_ScrollViewRef`].scrollToOffset({ offset: 0 })
  } catch (err) {
    // silently fail
  }
}

const tabBarOnPress = ({ navigation, defaultHandler }) => {
  scrollTabToTop(navigation);
  defaultHandler();
}

function setScrollViewRef(ref, options = {}) {
  const prefix = options.prefix || '';
  const refKey = `${prefix}_ScrollViewRef`;
  if (this[refKey]) {
    return
  }

  this[refKey] = ref;
  this.props.navigation.setParams({
    [refKey]: ref
  })
}

export {
  getActiveRouteName,
  getActiveTab,
  tabBarOnPress,
  setScrollViewRef
}
