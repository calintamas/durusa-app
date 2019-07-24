import React from 'react'
import { Image } from 'react-native'

import styles from './styles'

const SquareImage = (props) => {
  return (
    <Image
      style={styles.base}
      source={props.source}
      resizeMode='cover' />
  )
};

export default SquareImage
