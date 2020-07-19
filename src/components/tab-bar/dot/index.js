import React, { Component } from 'react';
import { Animated } from 'react-native';

import { metrics } from '../../../styles';
import styles from './styles';

const tabWidth = metrics.screenWidth / 3;
const positions = [
  tabWidth / 2 - 2,
  tabWidth + tabWidth / 2 - 1,
  2 * tabWidth + tabWidth / 2 - 2
];

export default class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftValue: new Animated.Value(props.activeRouteIndex)
    };
  }

  componentDidUpdate(prevProps) {
    const activeRouteIndex = this.props.activeRouteIndex;
    const prevActiveRouteIndex = prevProps.activeRouteIndex;
    if (activeRouteIndex !== prevActiveRouteIndex) {
      this.animate({
        toValue: activeRouteIndex
      });
    }
  }

  animate({ toValue }) {
    return new Promise((resolve) => {
      Animated.spring(this.state.leftValue, {
        toValue,
        bounciness: 5,
        useNativeDriver: true
      }).start(resolve);
    });
  }

  getLeftValue() {
    return this.state.leftValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: positions
    });
  }

  render() {
    const baseStyle = [
      styles.base,
      {
        transform: [
          {
            translateX: this.getLeftValue()
          }
        ]
      }
    ];

    return <Animated.View style={baseStyle} />;
  }
}
