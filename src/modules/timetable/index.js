import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Timetable extends Component {
  static navigationOptions = {
    title: 'Timetable',
    header: null
  }

  render() {
    return (
      <View style={styles.base}>
        <Text>Timetable</Text>
      </View>
    );
  }
}
