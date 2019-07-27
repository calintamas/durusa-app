import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import TabIcon from './tab-icon'
import Dot from './dot'
import styles from './styles'

export default class TabBar extends Component {
  render() {
    const {
      onTabPress,
      navigation
    } = this.props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
      <SafeAreaView style={styles.base}>
        {
          routes.map((route, routeIndex) => {
            const isRouteFocused = routeIndex === activeRouteIndex;

            const activeOpacity = isRouteFocused ? 1 : 0;
            const inactiveOpacity = isRouteFocused ? 0 : 1;

            return (
              <TouchableOpacity
                key={routeIndex}
                style={styles.icon}
                activeOpacity={0.9}
                onPress={() => onTabPress({ route })}>
                  <TabIcon
                    activeOpacity={activeOpacity}
                    inactiveOpacity={inactiveOpacity}
                    route={route} />
              </TouchableOpacity>
            );
          })
        }

        <View style={styles.dotContainer}>
          <Dot activeRouteIndex={activeRouteIndex} />
        </View>
      </SafeAreaView>
    );
  }
}
