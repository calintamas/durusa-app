import React, { Component } from 'react'
import { ScrollView, ImageBackground, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import AppVersion from '../../components/app-version'
import Header from '../../components/header'
import MenuRow from '../../components/menu-row'
import Separator from '../../components/separator'
import { icons, images } from '../../assets'
import styles from './styles'

export default class Menu extends Component {
  static navigationOptions = {
    title: 'Menu',
    header: null
  }

  goTo(screenName = '') {
    this.props.navigation.navigate(screenName);
  }

  render() {
    return (
      <SafeAreaView style={styles.base}>
        <ImageBackground
          imageStyle={styles.bgImg}
          style={styles.bg}
          source={images.home_bg}>
        <Header
          iconStyle={styles.headerIcon}
          leftIcon={icons.summerhills}
          title='Summer Hills info' />
          <ScrollView>
            <Separator />
            <MenuRow
              icon={icons.general_info_white}
              text='General information'
              onPress={() => this.goTo('GeneralInfo')} />
            <MenuRow
              icon={icons.camping_white}
              text='Camping'
              onPress={() => this.goTo('Camping')} />
            <MenuRow
              icon={icons.food_white}
              text='Food & Drinks'
              onPress={() => this.goTo('Food')} />
            <MenuRow
              icon={icons.payment_white}
              text='Payment methods'
              onPress={() => this.goTo('Payment')} />
            <MenuRow
              icon={icons.map_white}
              text='How to get to Durusa'
              onPress={() => this.goTo('Map')} />
          </ScrollView>
        </ImageBackground>

        <View style={styles.appVersionContainer}>
          <AppVersion />
        </View>

      </SafeAreaView>
    );
  }
}
