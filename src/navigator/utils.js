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

export {
  getActiveRouteName,
  getActiveTab
}
