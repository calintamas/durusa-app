import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

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
    height: 130,
    width: 150,
    borderRadius: 5,
    overflow: 'hidden'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    width: '80%',
    marginBottom: 10
  },
  title: {
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    ...dropShadow
  },
  hours: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
    ...dropShadow
  }
})
