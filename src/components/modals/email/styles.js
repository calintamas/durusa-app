import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../styles';

export default StyleSheet.create({
  base: {
    marginTop: 40,
    width: '80%',
    backgroundColor: colors.purple,
    // height: '55%',
    height: 400,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 15
  },
  icon: {
    width: 58,
    height: 64,
    marginBottom: 30
  },
  title: {
    ...fonts.default,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    ...fonts.default,
    fontSize: 12,
    color: colors.ligthGray2,
    textAlign: 'center'
  },
  closeButtonContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    ...fonts.default,
    color: colors.white,
    width: '100%',
    height: 30,
    padding: 0,
    borderColor: colors.ligthGray2,
    borderBottomWidth: 2,
    textAlign: 'center'
  },
  errorInput: {
    borderColor: colors.red
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 25
  }
});
