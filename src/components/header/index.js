import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import { icons } from '../../assets'
import styles from './styles'

const Header = (props) => {
  return (
    <View style={styles.base}>
      <TouchableOpacity
        style={styles.leftButton}
        onPress={props.onPressLeft}
        activeOpacity={props.onPressLeft ? undefined : 1}
        >
        <Image
          source={props.leftIcon || icons.left_arrow_white}
          style={styles.img}
          resizeMode='contain' />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text
          style={styles.title}
          numberOfLines={1}
          ellipsizeMode='tail'>
          {props.title}
        </Text>
      </View>
    </View>
  )
};

export default Header
