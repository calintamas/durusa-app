import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'

export default StyleSheet.create({
  base: {
    marginBottom: 30
  },
  title: {
    ...fonts.default,
    marginLeft: 25,
    marginBottom: 20,
    color: colors.white,
    fontSize: 14,
    fontWeight: '600'
  },
  list: {
    paddingLeft: 15
  },
  separator: {
    width: 10,
    height: 10
  },
  lastItemMargin: {
    width: 25
  }
})
