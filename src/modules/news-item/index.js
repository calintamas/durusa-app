import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import styles from './styles'

export default class NewsItem extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.data.title}`
  })

  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: '',
        text: ''
      }
    }
  }

  componentDidMount() {
    const data = this.props.navigation.getParam('data', {});
    this.setState({ data })
    console.log('data', data);
  }

  render() {
    const data = this.state.data;

    return (
      <SafeAreaView style={styles.base}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{data.text}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
