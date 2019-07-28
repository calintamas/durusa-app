import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export default StyleSheet.create({
  base: {
    marginTop: 25,
    marginLeft: 25
  },
  container: {
    flexDirection: 'row',
  },
  title: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 28
  },
  subtitle: {
    color: colors.white,
    fontSize: 12
  },
  item: {
    width: 60,
    height: 30,
    marginRight: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5
  },
  itemLine: {
    height: 2,
    width: '100%',
    backgroundColor: colors.darkGray,
    marginBottom: 2
  },
  itemLineActive: {
    backgroundColor: colors.white
  }
})
