import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../styles'

export default StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    ...fonts.default,
    fontSize: 10,
    color: colors.purple
  }
})
