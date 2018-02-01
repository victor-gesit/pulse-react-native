import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: 'rgb(83, 158, 255)',
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backButton: {
    marginLeft: 20,
    marginTop: 40
  },
  devName: {
    color: 'white',
    fontFamily: 'DINPro-Medium',
    fontSize: 32,
    marginTop: 7.8,
    marginLeft: 20
  },
  devLevel: {
    color: 'white',
    fontFamily: 'DINPro-Regular',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 0
  },
  satisfactionQuestion: {
    color: 'white',
    fontFamily: 'DINPro-Light',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 15
  },
  cardsContainer: {
    marginTop: 15,
    marginLeft: 20,
    height: 450,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  cardSpace: {
    width: 15
  },
  previewCard: {
    transform: [{ scaleY: 0.96 }],
    opacity: 0.7
  },
});
