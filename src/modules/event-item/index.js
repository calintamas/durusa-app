import React, { Component } from 'react'
import { View, ScrollView, Image, Text } from 'react-native'

import BackButton from '../../components/buttons/back'
import LinkRow from './link-row'
import HeartButton from './heart-button'
import Time from '../../services/time'
import TextBlock from '../../components/text-block'
import styles from './styles'

export default class EventItem extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);

    this.state = {
      id: null,
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

  toggleFavorite() {
    this.props.toggleFavorite(this.state);
  }

  render() {
    const props = this.props;

    const state = this.state;
    const date = Time.getEventDate(state.start_date, state.end_date);
    const isFavorited = props.favorites.indexOf(state.id) >= 0;

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
              isActive={isFavorited}
              onPress={this.toggleFavorite} />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>{state.name}</Text>
            <Text style={styles.dateText}>{`${date} @ ${state.location}`}</Text>

            <TextBlock
              text={state.description}
              baseStyle={styles.textBlockBase} />

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
