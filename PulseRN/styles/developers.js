import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(239, 241, 245, 0.74)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  navbarView: {
    justifyContent: 'center'
  },
  navbarText: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: 'DINPro-Medium',
    fontSize: 17,
    marginBottom: 23,
    marginTop: 23,
    height: 20,
    alignSelf: 'center'
  },
  developersLabel: {
    height: 41,
    marginBottom: 36,
    marginLeft: 12,
    color: 'rgba(0, 0, 0, 0.9)',
    fontFamily: 'DINPro-Medium',
    fontSize: 32,
  },
  developers: {
    flex: 1
  },
  columnWrapperStyle: {
    backgroundColor: 'green',
    justifyContent: 'space-between'
  },
  developerCell: {
    width: 159,
    height: 157,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(33, 73, 95, 0.6)',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  developerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 15,
    backgroundColor: 'white'
  },
  nameText: {
    width: 120,
    height: 44,
    marginTop: 20,
    marginLeft: 15,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: 'DINPro-Medium',
    fontSize: 17
  },
  ratingLabel: {
    marginTop: 1,
    marginLeft: 15,
    width: 100,
    height: 22,
    color: 'rgba(0, 0, 0, 0.8)',
    fontFamily: 'DINPro-Light',
    fontSize: 10
  }
});
