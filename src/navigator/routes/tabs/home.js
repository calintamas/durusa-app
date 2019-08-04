import { createStackNavigator } from 'react-navigation'

import Home from '../../../modules/home/container'
import { getDefaultNavigationOptions } from '../../navigation-options'

const options = {
  defaultNavigationOptions: (props) => getDefaultNavigationOptions(props)
}

const HomeTab = createStackNavigator({
  Home: {
    screen: Home
  }
}, options)

export default HomeTab
