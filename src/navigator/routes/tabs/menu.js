import { createStackNavigator } from 'react-navigation'

import Menu from '../../../modules/menu'
import { getDefaultNavigationOptions } from '../../navigation-options'

const options = {
  navigationOptions: (props) => getDefaultNavigationOptions(props)
}

const MenuTab = createStackNavigator({
  Menu: {
    screen: Menu
  }
}, options)

export default MenuTab
