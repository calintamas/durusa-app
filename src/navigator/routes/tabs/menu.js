import { createStackNavigator } from 'react-navigation'

import Menu from '../../../modules/menu'

const MenuTab = createStackNavigator({
  Menu: {
    screen: Menu
  }
})

export default MenuTab
