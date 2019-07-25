import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import Time from '../../services/time'

import styles from './styles'

const getHours = (startDate, endDate) => {
  return `${Time.getHour(startDate)} - ${Time.getHour(endDate)}`
}

const EventCard = (props) => {
  const data = props.data;

  return (
    <ImageBackground
      style={styles.base}
      source={{ uri: data.photo_url }}>
      <View style={styles.overlay}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.hours}>{getHours(data.start_date, data.end_date)}</Text>
        </View>
      </View>
    </ImageBackground>
  )
};

export default EventCard
