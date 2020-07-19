import { createStackNavigator } from 'react-navigation';

import Timetable from '../../../modules/timetable/container';
import EventItem from '../../../modules/event-item/container';
import { getDefaultNavigationOptions } from '../../navigation-options';

const options = {
  navigationOptions: (props) => getDefaultNavigationOptions(props),
  cardStyle: { opacity: 1 }
};

const TimetableTab = createStackNavigator(
  {
    Timetable: {
      screen: Timetable
    },
    EventItem: {
      screen: EventItem,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  options
);

export default TimetableTab;
