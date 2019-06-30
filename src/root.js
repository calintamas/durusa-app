import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { getActiveRouteName, getActiveTab } from './navigator/utils'
import RootNavigator from './navigator'

const styles = StyleSheet.create({
  base: {
    flex: 1
  }
})

export default class Root extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  onNavigationStateChange(prevState, currentState) {
    const currentScreen = getActiveRouteName(currentState);
    const prevScreen = getActiveRouteName(prevState);
    const currentTab = getActiveTab(currentState);

    if (currentScreen === prevScreen) {
      return
    }

    console.log('currentScreen', currentScreen);
    console.log('prevScreen', prevScreen);
    console.log('currentTab', currentTab);
  }

  render() {
    return (
      <View style={styles.base}>
        <RootNavigator onNavigationStateChange={this.onNavigationStateChange} />
      </View>
    );
  }
}
