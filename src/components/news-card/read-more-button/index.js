import React from 'react'

import TextButton from '../../buttons/text'
import { icons } from '../../../assets'

const ReadMoreButton = (props) => {
  if (props.textLength < 80) {
    return null
  }

  return (
    <TextButton
      text='Read more'
      icon={icons.right_arrow_yellow}
      disabled />
  )
};

export default ReadMoreButton
