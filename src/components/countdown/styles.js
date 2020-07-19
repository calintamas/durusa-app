import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  base: {
    marginTop: 35
  },
  text: {
    color: colors.white
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeItem: {
    ...fonts.default,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 60,
    color: colors.white
  },
  separator: {
    ...fonts.default,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    marginTop: 5
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textItem: {
    ...fonts.default,
    fontSize: 12,
    color: colors.white,
    width: 60,
    textAlign: 'center'
  }
});
