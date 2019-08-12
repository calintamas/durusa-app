import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../../styles'

export default StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  imgContainer: {
    width: 24,
    height: 24,
    marginRight: 25
  },
  img: {
    flex: 1
  },
  linkText: {
    ...fonts.default,
    color: colors.white,
    textDecorationLine: 'underline'
  }
})
