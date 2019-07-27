import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  icon: {
    // Render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // Workaround for react-native >= 0.54 layout bug
    minWidth: 25
  },
})
