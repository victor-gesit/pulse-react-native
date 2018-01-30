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
  welcomeLabel: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'DINPro-Regular',
    fontSize: 30,
    height: 38,
    marginTop: 28,
    textAlign: 'center',
    width: 124,
  },
  andelaFeedbackLabel: {
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
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nextButton: {
    width: 49,
    height: 26
  },
  nextButtonText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'DINPro-Regular',
    fontSize: 20
  },
  ovalShapesContainer: {
    flexDirection: 'row',
    width: 30,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
