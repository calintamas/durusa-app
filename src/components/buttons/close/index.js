import React from 'react';

import IconButton from '../icon';
import { icons } from '../../../assets';

const CloseButton = (props) => {
  return (
    <IconButton
      style={props.style}
      onPress={props.onPress}
      icon={icons.close_rounded}
    />
  );
};

export default CloseButton;
