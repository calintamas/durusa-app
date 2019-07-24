import React, { Component } from 'react'
import { View } from 'react-native'

import styles from './styles'

export default class NewsItem extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.data.title}`
  })

  componentDidMount() {
    const data = this.props.navigation.getParam('data', {});
    console.log('data', data);
  }

  render() {
    return (
      <View style={styles.base} />
    );
  }
}
