import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export default StyleSheet.create({
  base: {
    height: 55,
    backgroundColor: colors.black,
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
    bottom: 11,
    left: 0,
    right: 0
  }
})
