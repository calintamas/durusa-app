import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../styles';

export default StyleSheet.create({
  base: {
    width: '100%',
    height: 60,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  imgContainer: {
    width: 24,
    height: 24,
    marginRight: 30
  },
  img: {
    flex: 1
  },
  textContainer: {
    flex: 1
  },
  text: {
    ...fonts.default,
    fontSize: 16,
    color: colors.white
  }
});
