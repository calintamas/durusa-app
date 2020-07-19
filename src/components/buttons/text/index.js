import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import styles from './styles';

const TextButton = (props) => {
  const textStyle = [styles.text, props.textStyle];

  return (
    <TouchableOpacity
      style={styles.base}
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.icon ? (
        <Image source={props.icon} style={styles.img} resizeMode='contain' />
      ) : null}
      <Text style={textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
