import { StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

import { colors } from '../../styles'

export default StyleSheet.create({
  base: {
    height: 62,
    backgroundColor: colors.lightPurple,
    flexDirection: 'row',
    elevation: 2,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .3)'
  },
  icon: {
    flex: 1,
    paddingTop: 28,
    alignItems: 'center'
  },
  dotContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    ...ifIphoneX({ bottom: 51 }, { bottom: 16 })
  }
})
