import React, { useEffect } from 'react'
import { View } from 'react-native'

import LoadingIndicator from '../../components/loading-indicator'
import styles from './styles'

const InitialSetup = (props) => {
  useEffect(() => {
    props.initialSetup(props.navigation);
  }, []);

  return (
    <View style={styles.base}>
      <LoadingIndicator isLoading={true} />
    </View>
  )
};

export default InitialSetup
