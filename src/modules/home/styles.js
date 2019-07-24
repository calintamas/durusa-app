import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

export default StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.black
  },
  contentContainer: {
    padding: 15
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  separator: {
    height: 15
  }
})
