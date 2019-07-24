import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.yellow
  },
  img: {
    width: 10,
    height: 10,
    marginRight: 5
  }
})
