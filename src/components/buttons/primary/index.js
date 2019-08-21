import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.base}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
};

export default PrimaryButton
