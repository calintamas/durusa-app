import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'

export default StyleSheet.create({
  base: {
    marginBottom: 100
  },
  title: {
    ...fonts.default,
    marginLeft: 40,
    marginBottom: 20,
    color: colors.ligthGray,
    fontSize: 18,
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  list: {
    paddingLeft: 40
  },
  separator: {
    width: 20,
    height: 10
  },
  lastItemMargin: {
    width: 70
  }
})
