import { StyleSheet } from 'react-native'
import { colors, fonts, styles } from '../../styles'

export default StyleSheet.create({
  base: {
    height: 100,
    flex: 1,
    backgroundColor: colors.purple,
    borderRadius: 16,
    overflow: 'hidden',
    flexDirection: 'row'
  },
  imgContainer: {
    width: 90,
    height: '100%'
  },
  img: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between'
  },
  title: {
    ...fonts.default,
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.white,
    marginBottom: 2,
    ...styles.dropShadow
  },
  hours: {
    ...fonts.default,
    fontSize: 10,
    fontWeight: 'normal',
    color: colors.white,
    ...styles.dropShadow
  }
})
