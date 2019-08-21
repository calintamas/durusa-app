import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import Header from '../../components/header'
import MenuRow from '../../components/menu-row'
import { icons } from '../../assets'
import styles from './styles'

export default class Menu extends Component {
  static navigationOptions = {
    title: 'Menu',
    header: null
  }

  render() {
    return (
      <SafeAreaView style={styles.base}>
        <ScrollView>
          <Header
            leftIcon={icons.summerhills}
            title='Summer Hills info' />
          <MenuRow />
        </ScrollView>

      </SafeAreaView>
    );
  }
}
