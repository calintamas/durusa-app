import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const SIZE = 60;

export default StyleSheet.create({
  base: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors.ligthGray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer: {
    width: 24,
    height: 24
  },
  img: {
    flex: 1
  }
});
