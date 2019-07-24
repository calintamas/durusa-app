import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import HomeTab from './tabs/home'
import TimetableTab from './tabs/timetable'
import MenuTab from './tabs/menu'
import TabIcon from '../../components/tab-icon'
import { colors } from '../../styles'

const options = {
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: colors.black
    },
  },
  lazy: true,
  initialRouteName: 'Home'
};

const DefaultNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => <TabIcon type='home' isFocused={focused} />
    })
  },
  Timetable: {
    screen: TimetableTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => <TabIcon type='timetable' isFocused={focused} />
    })
  },
  Menu: {
    screen: MenuTab,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => <TabIcon type='menu' isFocused={focused} />
    })
  },
}, options);

export default DefaultNavigator
