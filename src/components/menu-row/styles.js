import { StyleSheet } from 'react-native'
import { fonts } from '../../styles'

export default StyleSheet.create({
  base: {
    width: '100%',
    height: 60,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgContainer: {
    width: 24,
    height: 24
  },
  img: {
    flex: 1
  },
  textContainer: {
    flex: 1
  },
  text: {
    ...fonts.default,
    fontSize: 16
  }
})
