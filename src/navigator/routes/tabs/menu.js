import { createStackNavigator } from 'react-navigation'

import Menu from '../../../modules/menu'
import GeneralInfo from '../../../modules/general-info'
import Camping from '../../../modules/camping'
import Food from '../../../modules/food'
import Payment from '../../../modules/payment'
import Map from '../../../modules/map'
import { getDefaultNavigationOptions } from '../../navigation-options'

const options = {
  navigationOptions: (props) => getDefaultNavigationOptions(props),
  cardStyle: { opacity: 1 }
}

const screenOptions = {
  navigationOptions: () => ({
    header: null
  })
}

const MenuTab = createStackNavigator({
  Menu: {
    screen: Menu
  },
  GeneralInfo: {
    screen: GeneralInfo,
    ...screenOptions
  },
  Camping: {
    screen: Camping,
    ...screenOptions
  },
  Food: {
    screen: Food,
    ...screenOptions
  },
  Payment: {
    screen: Payment,
    ...screenOptions
  },
  Map: {
    screen: Map,
    ...screenOptions
  }
}, options)

export default MenuTab
