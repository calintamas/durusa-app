import { StyleSheet } from 'react-native'

import { colors } from '../../../styles'

const SIZE = 4;

export default StyleSheet.create({
  base: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors.white
  }
})
