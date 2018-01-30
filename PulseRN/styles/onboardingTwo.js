import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(239, 241, 245, 0.74)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  artwork: {
    height: 285,
    marginTop: 35
  },
  easyCheckInLabel: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'DINPro-Regular',
    fontSize: 30,
    height: 38,
    marginTop: 28,
    textAlign: 'center',
    width: 190,
  },
  tapToRateLabel: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'DINPro-Regular',
    fontSize: 19,
    height: 63,
    marginTop: 14,
    textAlign: 'center',
    width: 300
  },
  footerContainer: {
    backgroundColor: 'rgba(239, 241, 245, 0.74)',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  getStartedButton: {
    backgroundColor: 'rgb(4, 89, 228)',
    borderColor: 'rgb(4, 89, 228)',
    borderRadius: 27,
    borderWidth: 1,
    height: 38,
    elevation: 1,
    marginTop: 40,
    paddingTop: 12,
    paddingBottom: 12,
    width: 108,
  },
  getStartedButtonText: {
    color: 'white',
    fontFamily: 'DINPro-Regular',
    fontSize: 11,
    textAlign: 'center',
  },
  ovalShapesContainer: {
    flexDirection: 'row',
    width: 30,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
