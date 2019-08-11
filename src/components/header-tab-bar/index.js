import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'

import { images } from '../../assets'
import styles from './styles'

export default class HeaderTabBar extends Component {
  render() {
    const props = this.props;

    const { index: activeRouteIndex, routes } = props.navigationState;
    const activeRoute = routes[activeRouteIndex];

    return (
      <ImageBackground
        style={styles.base}
        source={images.home_bg}>

        <Text style={styles.title}>{activeRoute.title}</Text>

        <View style={styles.container}>
          {
            routes.map((route, index) => {
              const isActive = index === activeRouteIndex;

              const itemLineStyle = [
                styles.itemLine,
                isActive && styles.itemLineActive
              ];

              return (
                <TouchableOpacity
                  key={index}
                  style={styles.item}
                  onPress={() => props.onIndexChange(index)}>
                  <View style={itemLineStyle} />
                </TouchableOpacity>
              );
            })
          }
        </View>

      </ImageBackground>
    );
  }
}
