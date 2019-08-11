import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

import Time from '../../services/time'
import styles from './styles'

const EventCard = (props) => {
  const data = props.data;

  return (
    <View style={styles.base}>
      <ImageBackground
        style={styles.img}
        resizeMode='cover'
        source={{ uri: data.photo_url }}>

      <View style={styles.titleContainer}>
        <Text
          style={styles.title}>
          {data.name}
        </Text>
        <Text style={styles.hours}>{Time.getEventHours(data.start_date, data.end_date)}</Text>
      </View>

      </ImageBackground>
    </View>

  )
};

export default EventCard
