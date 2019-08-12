import React, { Component } from 'react'
import { View, Image, Text, Linking, TouchableOpacity } from 'react-native'

import { icons } from '../../../assets'
import { colors } from '../../../styles'
import styles from './styles'

const getImgSource = (colorName = '') => {
  switch (colorName) {
    case 'berry':
      return icons.link_berry

    case 'plum':
      return icons.link_plum

    case 'mint':
      return icons.link_mint

    case 'yellow':
      return icons.link_yellow

    case 'green':
      return icons.link_green

    default:
      return icons.link_white
  }
}

const getTextColorStyle = (colorName = '') => {
  if (!colorName) {
    return null
  }
  return ({
    color: colors[colorName]
  })
}

export default class LinkRow extends Component {
  constructor(props) {
    super(props);
    this.openLink = this.openLink.bind(this);
  }

  openLink() {
    Linking.openURL(this.props.link);
  }

  render() {
    const props = this.props;

    const textStyle = [
      styles.linkText,
      getTextColorStyle(props.color)
    ];

    return (
      <View style={styles.base}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={getImgSource(props.color)} />
        </View>

        <TouchableOpacity onPress={this.openLink}>
          <Text
            style={textStyle}>
            {props.link}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
