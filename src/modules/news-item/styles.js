import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export default StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.dusk
  },
  contentContainer: {
    padding: 15
  },
  textContainer: {
    padding: 15,
    paddingVertical: 30,
    borderRadius: 4,
    backgroundColor: colors.darkGray
  },
  text: {
    color: colors.white,
    fontSize: 14
  }
})
