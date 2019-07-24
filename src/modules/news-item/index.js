import React, { Component } from 'react'
import { View, ScrollView, Text, Share } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import ShareButton from '../../components/buttons/share'
import styles from './styles'

export default class NewsItem extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.data.title}`,
    headerRight: <ShareButton onPress={navigation.state.params.onSharePress} />
  })

  constructor(props) {
    super(props);
    this.onSharePress = this.onSharePress.bind(this);

    this.state = {
      data: {
        title: '',
        text: ''
      }
    }
  }

  componentDidMount() {
    const data = this.props.navigation.getParam('data', {});
    this.setState({ data });

    this.props.navigation.setParams({ onSharePress: this.onSharePress });
  }

  onSharePress() {
    const data = this.state.data;

    const content = {
      message: data.text,
      title: `Durusa | ${data.title}`
    };

    const options = {
      // Android only:
      dialogTitle: content.title,
      // iOS only:
      subject: content.title,
      excludedActivityTypes: [
        'com.apple.UIKit.activity.AirDrop',
        'com.apple.UIKit.activity.AddToReadingList'
      ]
    };

    Share.share(content, options);
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
