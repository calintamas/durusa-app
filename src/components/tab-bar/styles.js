import { StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

import { colors } from '../../styles'

export default StyleSheet.create({
  base: {
    height: 55,
    backgroundColor: colors.dusk,
    flexDirection: 'row',
    elevation: 2,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .3)',
  },
  icon: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center'
  },
  dotContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    ...ifIphoneX({ bottom: 45 }, { bottom: 11 })
  }
})
