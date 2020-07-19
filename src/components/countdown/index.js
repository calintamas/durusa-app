import React, { Component } from 'react';
import { View, Text, AppState } from 'react-native';

import Time from '../../services/time';
import styles from './styles';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);

    this.state = {
      distanceToDate: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      appState: AppState.currentState
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.startInterval();
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    clearInterval(this.interval);
  }

  startInterval() {
    const countDownDate = this.props.date;

    if (this.interval) {
      clearInterval(this.interval);
    }

    const initialDistToDate = Time.getDistanceToDate(countDownDate);
    if (!initialDistToDate) {
      return;
    }
    this.setState({
      distanceToDate: initialDistToDate
    });

    this.interval = setInterval(() => {
      const distToDate = Time.getDistanceToDate(countDownDate);
      if (!distToDate) {
        return clearInterval(this.interval);
      }
      this.setState({
        distanceToDate: distToDate
      });
    }, 1000);
  }

  handleAppStateChange(nextAppState) {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // App has come to the foreground
      this.startInterval();
    }
    this.setState({ appState: nextAppState });
  }

  renderSeparator() {
    return <Text style={styles.separator}>:</Text>;
  }

  render() {
    const { days, hours, minutes, seconds } = this.state.distanceToDate;

    return (
      <View style={styles.base}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeItem}>{days}</Text>
          {this.renderSeparator()}
          <Text style={styles.timeItem}>{hours}</Text>
          {this.renderSeparator()}
          <Text style={styles.timeItem}>{minutes}</Text>
          {this.renderSeparator()}
          <Text style={styles.timeItem}>{seconds}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textItem}>days</Text>
          <Text style={styles.textItem}>hours</Text>
          <Text style={styles.textItem}>minutes</Text>
          <Text style={styles.textItem}>seconds</Text>
        </View>
      </View>
    );
  }
}
