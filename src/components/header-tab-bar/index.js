import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default class HeaderTabBar extends Component {
  render() {
    const props = this.props;

    const { index: activeRouteIndex, routes } = props.navigationState;
    const activeRoute = routes[activeRouteIndex];

    return (
      <View style={styles.base}>
        <Text style={styles.title}>{activeRoute.title}</Text>
        <Text style={styles.subtitle}>{activeRoute.subtitle}</Text>

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

      </View>
    );
  }
}
