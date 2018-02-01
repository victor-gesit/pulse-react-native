import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(239, 241, 245, 0.74)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  backButton: {
    left: 24,
    top: 40,
    zIndex: 1
  },
  button: {
    backgroundColor: 'rgb(4, 89, 228)',
    borderColor: 'rgb(4, 89, 228)',
    borderRadius: 27,
    borderWidth: 1,
    height: 54,
    elevation: 1,
    marginTop: 40,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: 'rgb(4, 89, 228)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'DINPro-Regular',
    fontSize: 19,
    textAlign: 'center',
  },
  infoLabel: {
    fontFamily: 'DINPro-Regular',
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 19,
    marginLeft: 38,
    marginTop: 208,
    marginRight: 37,
    textAlign: 'center',
  },
  codeInputField: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
    fontFamily: 'DINPro-Regular',
    fontSize: 32,
    height: 84,
    width: 55,
    textAlign: 'center',
    shadowColor: 'rgba(52, 84, 122, 0.06)',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  separatorView: {
    width: 16,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'rgba(4, 89, 228, 0.1)',
    margin: 7,
  },
  codeInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 85,
    marginTop: 30,
    width: 310,
  },
  didNotReceiveCodeText: {
    fontFamily: 'DINPro-Regular',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.74)',
  },
  resendCodeButton: {
    fontFamily: 'DINPro-Regular',
    fontSize: 20,
    textAlign: 'right'
  },
  footerContainer: {
    backgroundColor: 'rgba(239, 241, 245, 0.74)',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerContainer: {
    backgroundColor: 'rgba(239, 241, 245, 0.74)',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
