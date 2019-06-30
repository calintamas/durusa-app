import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.base}>
        <Text>Home</Text>
      </View>
    );
  }
}
