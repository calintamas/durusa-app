import { StyleSheet } from 'react-native';
import { colors, fonts, styles } from '../../styles';

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
    ...styles.dropShadow
  },
  hours: {
    ...fonts.default,
    fontSize: 10,
    fontWeight: 'normal',
    color: colors.white,
    ...styles.dropShadow
  }
});
