import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

export default StyleSheet.create({
  base: {
    paddingTop: 30,
    paddingHorizontal: 40
  },
  container: {
    flexDirection: 'row',
  },
  title: {
    ...fonts.default,
    color: colors.white,
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 5
  },
  subtitle: {
    ...fonts.default,
    color: colors.white,
    fontSize: 12
  },
  item: {
    flex: 1,
    height: 30,
    marginRight: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10
  },
  itemLine: {
    height: 3,
    width: '100%',
    backgroundColor: colors.darkGray,
    marginBottom: 2
  },
  itemLineActive: {
    backgroundColor: colors.white
  }
})
