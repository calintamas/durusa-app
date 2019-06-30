import { createBottomTabNavigator } from 'react-navigation'

import HomeTab from './tabs/home'
import TimetableTab from './tabs/timetable'
import MenuTab from './tabs/menu'

const options = {
  tabBarOptions: {
    showLabel: true
  },
  lazy: true,
  initialRouteName: 'Home'
};

const DefaultNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeTab
  },
  Timetable: {
    screen: TimetableTab
  },
  Menu: {
    screen: MenuTab
  },
}, options);

export default DefaultNavigator
