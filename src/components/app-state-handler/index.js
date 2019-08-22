import React, { Component } from 'react'
import { View, AppState } from 'react-native'

import Time from '../../services/time'
import EmailRequest from '../../services/email-request'
import config from '../../config'

export default class AppStateHandler extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);

    this.state = {
      appState: AppState.currentState
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  onWake() {
    const festivalDayIndex = Time.getCurrentFestivalDayIndex(config.days, {
      switchHour: config.switch_day_hour
    })
    this.props.setTimetableHeaderTab(festivalDayIndex)

    EmailRequest.showModal(festivalDayIndex);
  }

  handleAppStateChange(nextAppState) {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      // App has come to the foreground
      this.onWake();
    }
    this.setState({ appState: nextAppState });
  }

  render() {
    // without this android doesn't mount the Component at all
    // eslint-disable-next-line
    const props = this.props;
    return <View />
  }
}
