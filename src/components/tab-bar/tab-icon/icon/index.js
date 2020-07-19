import React from 'react';
import { Image } from 'react-native';

import { tabBarIcons } from '../../../../assets';
import { toLowerCase } from '../../../../utils/string';
import styles from './styles';

const getSource = (type = '', isFocused = false) => {
  const lowerType = toLowerCase(type);
  const src = {
    default: tabBarIcons[`${lowerType}_gray`],
    focused: tabBarIcons[`${lowerType}_white`]
  };

  return isFocused ? src.focused : src.default;
};

const Icon = (props) => {
  return (
    <Image
      style={styles.base}
      source={getSource(props.type, props.isFocused)}
      resizeMode='contain'
    />
  );
};

export default Icon;
