import React from 'react';
import { ActivityIndicator } from 'react-native';

const LoadingIndicator = (props) => {
  return <ActivityIndicator size='small' animating={props.isLoading} />;
};

export default LoadingIndicator;
