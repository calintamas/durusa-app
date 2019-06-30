import React, { useEffect } from 'react'
import { View } from 'react-native'

import LoadingIndicator from '../../components/loading-indicator'
import Navigation from '../../services/navigation'
import styles from './styles'

const InitialSetup = (props) => {
  useEffect(() => {
    props.initialSetup();
    Navigation.setRef(props.navigation);
  }, []);

  return (
    <View style={styles.base}>
      <LoadingIndicator isLoading={true} />
    </View>
  )
};

export default InitialSetup
