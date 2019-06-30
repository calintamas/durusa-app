import { createStackNavigator } from 'react-navigation'

import Timetable from '../../../modules/timetable'

const TimetableTab = createStackNavigator({
  Timetable: {
    screen: Timetable
  }
})

export default TimetableTab
