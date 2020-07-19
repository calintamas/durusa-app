import React from 'react';
import { Image } from 'react-native';

const getSize = ({ size = 24 }) => {
  return {
    width: size,
    height: size
  };
};

const Icon = (props) => {
  if (!props.source) {
    return null;
  }

  const baseStyle = [getSize(props)];

  return <Image style={baseStyle} source={props.source} resizeMode='contain' />;
};

export default Icon;
