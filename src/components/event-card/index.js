import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'

import Time from '../../services/time'
import HeartIcon from '../heart-icon'
import styles from './styles'

const EventCard = (props) => {
  const data = props.data;

  return (
    <TouchableOpacity
      style={styles.base}
      onPress={props.onPress}>

      <HeartIcon isVisible={props.isFavorited} />

      <ImageBackground
        style={styles.img}
        resizeMode='cover'
        source={{ uri: data.photo_url }}
        borderRadius={16}>

      <View style={styles.titleContainer}>
        <Text
          style={styles.title}>
          {data.name}
        </Text>
        <Text style={styles.hours}>{Time.getEventHours(data.start_date, data.end_date)}</Text>
      </View>

      </ImageBackground>
    </TouchableOpacity>
  )
};

export default EventCard
