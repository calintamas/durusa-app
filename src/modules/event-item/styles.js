import { StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

import { colors, metrics, fonts } from '../../styles'

export default StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.darkPurple
  },
  imgContainer: {
    height: metrics.screenHeight * 0.5,
    width: '100%'
  },
  img: {
    flex: 1
  },
  titleText: {
    ...fonts.default,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 10
  },
  dateText: {
    ...fonts.default,
    fontSize: 12,
    color: colors.white,
    marginBottom: 20
  },
  paragraph: {
    ...fonts.default,
    fontSize: 14,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
  backButtonContainer: {
    position: 'absolute',
    ...ifIphoneX({ top: 37 }, { top: 22 }),
    left: 15,
    zIndex: 1,
    elevation: 1
  },
  contentContainer: {
    padding: 30
  },
  heartButtonContainer: {
    position: 'absolute',
    top: metrics.screenHeight * 0.455,
    right: 30,
    zIndex: 3,
    elevation: 1
  },
  textBlockBase: {
    paddingHorizontal: 0
  }
})
