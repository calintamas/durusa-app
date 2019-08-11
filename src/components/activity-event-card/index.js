import React from 'react'
import { View, Image, Text } from 'react-native'

import Time from '../../services/time'
import styles from './styles'

const ActivityEventCard = (props) => {
  const data = props.data;

  return (
    <View style={styles.base}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          resizeMode='cover'
          source={{ uri: data.photo_url }} />
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={styles.title}
          numberOfLines={2}
          ellipsizeMode='tail'>
          {data.name}
        </Text>
        <Text style={styles.hours}>{Time.getEventHours(data.start_date, data.end_date)}</Text>
      </View>
    </View>
  )
};

export default ActivityEventCard
