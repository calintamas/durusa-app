import React from 'react';
import { View, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import styles from './styles';

const version = DeviceInfo.getVersion();
const buildNumber = DeviceInfo.getBuildNumber();

const AppVersion = (props) => {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>{`${version} (${buildNumber})`}</Text>
    </View>
  );
};

export default AppVersion;
