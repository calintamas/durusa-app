import React from 'react'

import IconButton from '../icon'
import { icons } from '../../../assets'

const ShareButton = (props) => {
  return (
    <IconButton
      style={props.style}
      onPress={props.onPress}
      icon={icons.share_yellow} />
  )
};

export default ShareButton
