import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export default StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.dusk
  },
  headerContainer: {
    height: 250,
    alignItems: 'center',
    marginBottom: 25
  },
  bg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    padding: 15,
    paddingTop: 0
  },
  logo: {
    width: 117,
    height: 100
  },
  separator: {
    height: 25
  }
})
