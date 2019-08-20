import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import appActions from './redux/app/actions'

import NotificationHandler from './components/notification-handler'
import { getActiveRouteName, getActiveTab } from './navigator/utils'
import RootNavigator from './navigator'

const styles = StyleSheet.create({
  base: {
    flex: 1
  }
})

class Root extends Component {
  constructor(props) {
    super(props);
    this.onNavigationStateChange = this.onNavigationStateChange.bind(this)
    console.disableYellowBox = true;
  }

  onNavigationStateChange(prevState, currentState) {
    const currentScreen = getActiveRouteName(currentState);
    const prevScreen = getActiveRouteName(prevState);
    const currentTab = getActiveTab(currentState);

    if (currentScreen === prevScreen) {
      return
    }

    this.props.setNavigationState({
      current_tab: currentTab.name,
      current_tab_index: currentTab.index,
      current_screen: currentScreen,
      prev_screen: prevScreen
    });
  }

  render() {
    return (
      <View style={styles.base}>
        <RootNavigator onNavigationStateChange={this.onNavigationStateChange} />
        <NotificationHandler />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setNavigationState: appActions.setNavigationState
}, dispatch)

export default connect(null, mapDispatchToProps)(Root)
