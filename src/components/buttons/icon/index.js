import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './styles'

const IconButton = (props) => {
  const baseStyle = [
    styles.base,
    props.style
  ];

  const imgStyle = [
    styles.img,
    props.imgStyle
  ];

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={baseStyle}>
      <Image
        style={imgStyle}
        source={props.icon}
        resizeMode='contain' />
    </TouchableOpacity>
  )
};

export default IconButton
