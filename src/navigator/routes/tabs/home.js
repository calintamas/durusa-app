import { createStackNavigator } from 'react-navigation'

import Home from '../../../modules/home'

const HomeTab = createStackNavigator({
  Home: {
    screen: Home
  }
})

export default HomeTab
