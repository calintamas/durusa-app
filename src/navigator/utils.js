import store from '../redux/store'
import appSelectors from '../redux/app/selectors'
import timetableSelectors from '../redux/timetable/selectors'

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

    const storeState = store.getState();

    const currentBottomTab = appSelectors.getCurrentBottomTab(storeState);
    if (routeName !== currentBottomTab) {
      throw new Error('Active route is not on the current tab')
    }

    let ref = route.params[`${route.routeName}_ScrollViewRef`];

    const pagerIndex = route.params.pagerIndex;
    if (pagerIndex != null) {
      const activeHeaderIndex = timetableSelectors.getHeaderIndex(storeState);
      ref = route.params[`${route.routeName}_${activeHeaderIndex}_ScrollViewRef`]
    }

    const method = ref.scrollToOffset ? 'scrollToOffset' : 'scrollTo';
    ref[method]({ offset: 0, x: 0 })
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
    [refKey]: ref,
    pagerIndex: options.pagerIndex
  })
}

export {
  getActiveRouteName,
  getActiveTab,
  tabBarOnPress,
  setScrollViewRef
}
