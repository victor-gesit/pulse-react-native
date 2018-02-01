import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: 'rgb(83, 158, 255)',
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    backgroundColor: 'rgb(83, 158, 255)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  backButton: {
    left: 24,
    top: 40,
    zIndex: 1
  },
  thankyouLabel: {
    color: 'white',
    fontFamily: 'DINPro-Regular',
    fontSize: 19,
    marginTop: 269,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(255, 255, 255)',
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
    color: 'rgb(83, 158, 255)',
    fontFamily: 'DINPro-Regular',
    fontSize: 18,
    textAlign: 'center',
  }
});
