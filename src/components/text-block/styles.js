import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../styles'

export default StyleSheet.create({
  base: {
    paddingHorizontal: 30,
    marginBottom: 20
  },
  p: {
    ...fonts.default,
    fontSize: 14,
    color: colors.white,
    fontWeight: '300',
    lineHeight: 21
  }
})
