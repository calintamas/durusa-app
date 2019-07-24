import React from 'react'
import { Image } from 'react-native'

import { tabBarIcons } from '../../assets'
import styles from './styles'

const getSource = (type = '', isFocused = false) => {
  const src = {
    default: tabBarIcons[`${type}_gray`],
    focused: tabBarIcons[`${type}_white`]
  };

  return isFocused ? src.focused : src.default
}

const TabIcon = (props) => {
  return (
    <Image
      style={styles.base}
      source={getSource(props.type, props.isFocused)}
      resizeMode='contain' />
  );
};

export default TabIcon
