import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import InitialSetup from '../modules/initial-setup/container';
import DefaultRoutes from './routes/default';

const RootNavigator = createSwitchNavigator(
  {
    InitialSetup: {
      screen: InitialSetup
    },
    Default: {
      screen: DefaultRoutes
    }
  },
  {
    initialRouteName: 'InitialSetup'
  }
);

export default createAppContainer(RootNavigator);
