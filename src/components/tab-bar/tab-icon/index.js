import React from 'react'
import { View, Animated } from 'react-native'

import Icon from './icon'
import styles from './styles'

const TabIcon = (props) => {
  const {
    activeOpacity,
    inactiveOpacity,
    route
  } = props;

  return (
    <View>
      <Animated.View style={[styles.icon, { opacity: activeOpacity }]}>
        <Icon
          type={route.routeName}
          isFocused={true} />
      </Animated.View>
      <Animated.View style={[styles.icon, { opacity: inactiveOpacity }]}>
        <Icon
          type={route.routeName}
          isFocused={false} />
      </Animated.View>
    </View>
  )
};

export default TabIcon
