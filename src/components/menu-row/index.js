import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import styles from './styles'

const MenuRow = (props) => {
  return (
    <TouchableOpacity
      style={styles.base}
      onPress={props.onPress}>
      <View style={styles.imgContainer}>
        <Image
          source={props.img}
          style={styles.img}
          resizeMode='contain' />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default MenuRow
