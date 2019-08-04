import React from 'react'
import { View, Text } from 'react-native'

import Time from '../../services/time'
import Icon from '../icon'
import { icons } from '../../assets'
import styles from './styles'

const getIconSource = (type = '') => {
  switch (type) {
    case 'sunrise':
      return icons.sunrise_pink

    case 'heart':
      return icons.heart_orange

    case 'wind':
      return icons.wind_green

    case 'rain':
      return icons.rain_green

    default:
      return null
  }
}

const getTextLength = (text = '') => {
  return text.length
}

const NewsCard = (props) => {
  const textLength = getTextLength(props.text);

  return (
    <View style={styles.base}>

      <View style={styles.iconContainer}>
        <Icon source={getIconSource(props.icon)} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{props.title}</Text>

        {
          textLength > 0
            ? <Text
                style={styles.text}>
                {props.text}
              </Text>
            : null
        }

        <Text style={styles.dateText}>{Time.getRelativeDate(props.date)}</Text>
      </View>
    </View>
  )
};

export default NewsCard
