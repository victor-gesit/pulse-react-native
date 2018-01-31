import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(239, 241, 245, 0.74)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchView: {
    flexDirection: 'row',
    height: 64,
    marginTop: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(33, 73, 95, 0.6)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginBottom: 22,
    marginLeft: 20,
    marginTop: 22,
    marginRight: 20,
  },
  searchBox: {
    fontFamily: 'DINPro-Regular',
    fontSize: 20,
    flex: 1,
  },
  clearButton: {
    height: 20,
    width: 20,
    marginRight: 20,
    marginTop: 22,
    marginBottom: 22,
    marginLeft: 2
  },
  searchResult: {
    flexDirection: 'row',
    height: 50,
    marginTop: 20,
    marginLeft: 25,
  },
  devImage: {
    marginLeft: 0.3,
    marginRight: 26,
    width: 50,
    height: 49.7,
    borderRadius: 25,
  },
  devInfoView: {
    justifyContent: 'center',
    flex: 1
  },
  devName: {
    color: 'rgba(0, 0, 0, 0.9)',
    fontFamily: 'DINPro-Regular',
    fontSize: 16,
    marginBottom: 1
  },
  devLevel: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'DINPro-Regular',
    fontSize: 16,
  }
});
