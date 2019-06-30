import React, { Component } from 'react'
import { View } from 'react-native'

import LoadingIndicator from '../../components/loading-indicator'
import Navigation from '../../services/navigation'
import styles from './styles'

export default class InitialSetup extends Component {
  componentDidMount() {
    this.props.initialSetup();
    Navigation.setRef(this.props.navigation);
  }

  render() {
    return (
      <View style={styles.base}>
        <LoadingIndicator isLoading={true} />
      </View>
    );
  }
}
