import React, { Component } from 'react'
import { View, ScrollView, Image, Text } from 'react-native'

import BackButton from '../../components/buttons/back'
import LinkRow from './link-row'
import HeartButton from './heart-button'
import Time from '../../services/time'
import styles from './styles'

export default class EventItem extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);

    this.state = {
      start_date: '',
      end_date: '',
      name: '',
      description: '',
      photo_url: null,
      color: '',
      location: '',
      web_url: []
    }
  }

  componentDidMount() {
    const data = this.props.navigation.getParam('data');
    this.setState(data);
  }

  goBack() {
    this.props.navigation.goBack();
  }

  toggleFavorites() {

  }

  render() {
    const state = this.state;
    const date = Time.getEventDate(state.start_date, state.end_date);

    return (
      <View style={styles.base}>
        <View style={styles.backButtonContainer}>
          <BackButton onPress={this.goBack} />
        </View>

        <ScrollView>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={state.photo_url ? { uri: state.photo_url } : null}
              resizeMode='cover' />
          </View>

          <View style={styles.heartButtonContainer}>
            <HeartButton
              color={state.color}
              isActive={false}
              onPress={this.toggleFavorites} />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>{state.name}</Text>
            <Text style={styles.dateText}>{`${date} @ ${state.location}`}</Text>

            <Text style={styles.paragraph}>{state.description}</Text>

            {
              state.web_url.map((link, index) => {
                return (
                  <LinkRow
                    key={index}
                    color={state.color}
                    link={link} />
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}
