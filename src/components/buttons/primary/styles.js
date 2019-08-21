import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../../styles'

export default StyleSheet.create({
  base: {
    width: '100%',
    height: 40,
    backgroundColor: colors.plum,
    borderRadius: 48,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    ...fonts.default,
    fontSize: 14,
    textTransform: 'uppercase',
    color: colors.white
  }
})
