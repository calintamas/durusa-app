import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Menu extends Component {
  static navigationOptions = {
    title: 'Menu'
  }

  render() {
    return (
      <View style={styles.base}>
        <Text>Menu</Text>
      </View>
    );
  }
}
