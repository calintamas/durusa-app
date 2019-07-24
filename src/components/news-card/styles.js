import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    backgroundColor: colors.darkGray,
    padding: 15,
    borderRadius: 4,
    overflow: 'hidden'
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
    fontSize: 10,
    color: colors.gray
  },
  title: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
    marginVertical: 8
  },
  text: {
    fontSize: 12,
    color: colors.white,
    marginBottom: 8
  }
})
