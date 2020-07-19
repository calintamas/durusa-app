import React from 'react';
import { View, Image } from 'react-native';

import { icons } from '../../assets';
import styles from './styles';

const HeartIcon = (props) => {
  if (!props.isVisible) {
    return null;
  }

  return (
    <View style={styles.base}>
      <Image
        style={styles.img}
        source={icons.heart_filled}
        resizeMode='contain'
      />
    </View>
  );
};

export default HeartIcon;
