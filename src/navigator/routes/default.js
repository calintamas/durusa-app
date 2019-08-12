import { createBottomTabNavigator } from 'react-navigation'

import HomeTab from './tabs/home'
import TimetableTab from './tabs/timetable'
import MenuTab from './tabs/menu'
import TabBar from '../../components/tab-bar'
import { tabBarOnPress } from '../utils'
import { colors } from '../../styles'

const options = {
  tabBarComponent: TabBar,
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: colors.darkPurple
    },
  },
  lazy: true,
  initialRouteName: 'Timetable'
};

const DefaultNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress
    })
  },
  Timetable: {
    screen: TimetableTab,
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress
    })
  },
  Menu: {
    screen: MenuTab
  },
}, options);

export default DefaultNavigator
