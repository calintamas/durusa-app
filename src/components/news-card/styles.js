import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 4,
    overflow: 'hidden',
    marginHorizontal: 15
  },
  iconContainer: {
    width: '13%'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  photoContainer: {
    width: '30%',
    alignItems: 'flex-end'
  },
  dateText: {
    ...fonts.default,
    fontSize: 10,
    color: colors.gray
  },
  title: {
    ...fonts.default,
    fontSize: 20,
    color: colors.white,
    fontWeight: '800',
    marginBottom: 8
  },
  text: {
    ...fonts.default,
    fontSize: 14,
    color: colors.white,
    marginBottom: 8
  },
  rightArrowContainer: {
    width: 14,
    marginTop: 6
  }
});
