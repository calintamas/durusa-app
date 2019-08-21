import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../styles'

export default StyleSheet.create({
  base: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30
  },
  leftButton: {
    height: 67,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 48,
    width: 32
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    ...fonts.default,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white
  }
})
