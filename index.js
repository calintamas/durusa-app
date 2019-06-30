import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import { name as appName } from './app.json'
import Root from './src/root'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => App);
