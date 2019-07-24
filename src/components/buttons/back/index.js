import React from 'react'

import IconButton from '../icon'
import { icons } from '../../../assets'

const BackButton = (props) => {
  return (
    <IconButton
      style={props.style}
      onPress={props.onPress}
      imgStyle={{ transform: [{ scaleX: -1 }] }}
      icon={icons.right_arrow_yellow} />
  )
};

export default BackButton
