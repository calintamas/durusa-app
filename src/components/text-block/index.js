import React from 'react';
import { View, Text } from 'react-native';

import { getParagraphs } from '../../utils/string';
import styles from './styles';

const TextBlock = (props) => {
  const baseStyle = [styles.base, props.baseStyle];
  return getParagraphs(props.text).map((item, index) => {
    return (
      <View style={baseStyle} key={index}>
        <Text style={styles.p}>{item}</Text>
      </View>
    );
  });
};

export default TextBlock;
