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
    marginTop: 40,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: 'rgb(4, 89, 228)',
    shadowOffset: { width: 0, height: 7 },
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
  emailInputField: {
    backgroundColor: 'white',
    borderRadius: 32,
    elevation: 1,
    fontFamily: 'DINPro-Regular',
    fontSize: 22,
    height: 64,
    width: 315,
    paddingLeft: 17,
    paddingRight: 30,
    shadowColor: 'rgba(52, 84, 122, 0.06)',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: 'absolute'
  },
  emailInputContainer: {
    marginTop: 30,
    width: 315,
    height: 64,
  },
  activityIndicator: {
    position: 'absolute',
    opacity: 1,
    top: 22,
    right: 8,
    width: 20,
    height: 20
  }
});
