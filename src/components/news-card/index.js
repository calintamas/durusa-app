import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import Time from '../../services/time'
import ReadMoreButton from './read-more-button'
import SquareImage from '../square-image'
import styles from './styles'

const getTextLength = (text = '') => {
  return text.length
}

const NewsCard = (props) => {
  const textLength = getTextLength(props.text);

  return (
    <TouchableOpacity
      style={styles.base}
      onPress={props.onPress}>

      <View style={styles.contentContainer}>
        <Text style={styles.dateText}>{Time.getRelativeDate(props.date)}</Text>
        <Text style={styles.title}>{props.title}</Text>

        {
          textLength > 0
            ? <Text
                style={styles.text}
                numberOfLines={2}
                ellipsizeMode='tail'>
                {props.text}
              </Text>
            : null
        }

        <ReadMoreButton textLength={textLength} />
      </View>

      <View style={styles.photoContainer}>
        <SquareImage source={{ uri: props.image }} />
      </View>

    </TouchableOpacity>
  )
};

export default NewsCard
