import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'

const dropShadow = {
  shadowOffset: {
    width: 0,
    height: 5
  },
  shadowRadius: 5,
  shadowOpacity: 0.1,
  elevation: 2
}

export default StyleSheet.create({
  base: {
    height: 240,
    width: 156,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: colors.lightPurple
  },
  img: {
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 10
  },
  title: {
    ...fonts.default,
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.white,
    marginBottom: 2,
    ...dropShadow
  },
  hours: {
    ...fonts.default,
    fontSize: 10,
    fontWeight: 'normal',
    color: colors.white,
    ...dropShadow
  }
})
