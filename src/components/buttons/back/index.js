import React from 'react'

import IconButton from '../icon'
import { icons } from '../../../assets'

const BackButton = (props) => {
  return (
    <IconButton
      style={props.style}
      onPress={props.onPress}
      icon={icons.left_arrow_white} />
  )
};

export default BackButton
