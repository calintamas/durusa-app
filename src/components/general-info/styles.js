import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

export default StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.darkPurple
  },
  bg: {
    width: '100%',
    height: '100%'
  },
  bgImg: {
    height: metrics.screenHeight * 0.5
  }
});
