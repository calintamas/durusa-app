import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import { icons } from '../../../assets'
import { colors } from '../../../styles'
import styles from './styles'

const getBgColorStyle = (colorName) => {
  if (!colorName) {
    return null
  }
  return ({
    backgroundColor: colors[colorName]
  })
}

const HeartButton = (props) => {
  const baseStyle = [
    styles.base,
    getBgColorStyle(props.color)
  ]
  return (
    <TouchableOpacity
      style={baseStyle}
      onPress={props.onPress}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={props.isActive ? icons.heart_filled : icons.heart_empty}
          resizeMode='contain' />
      </View>
    </TouchableOpacity>
  )
};

export default HeartButton
