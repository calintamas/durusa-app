import React from 'react'
import { Image } from 'react-native'

import styles from './styles'

const SquareImage = (props) => {
  if (!props.source || !props.source.uri) {
    return null
  }

  return (
    <Image
      style={styles.base}
      source={props.source}
      resizeMode='cover' />
  )
};

export default SquareImage
