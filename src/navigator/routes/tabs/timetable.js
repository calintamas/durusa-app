import { createStackNavigator } from 'react-navigation'

import Timetable from '../../../modules/timetable'
import { getDefaultNavigationOptions } from '../../navigation-options'

const options = {
  navigationOptions: (props) => getDefaultNavigationOptions(props)
}

const TimetableTab = createStackNavigator({
  Timetable: {
    screen: Timetable
  }
}, options)

export default TimetableTab
