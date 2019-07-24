import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import moment from 'moment'

import ReadMoreButton from './read-more-button'
import SquareImage from '../square-image'
import styles from './styles'

const NewsCard = (props) => {
  return (
    <TouchableOpacity
      style={styles.base}
      onPress={props.onPress}>

      <View style={styles.contentContainer}>
        <Text style={styles.dateText}>{moment(props.date).calendar()}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text
          style={styles.text}
          numberOfLines={2}
          ellipsizeMode='tail'>
          {props.text}
        </Text>
        <ReadMoreButton />
      </View>

      <View style={styles.photoContainer}>
        <SquareImage source={{ uri: props.image }} />
      </View>

    </TouchableOpacity>
  )
};

export default NewsCard
