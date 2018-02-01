import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  ratingCard: {
    width: 316,
    height: 449,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(36, 73, 121, 0.54)',
    shadowOffset: { width: 0, height: 27 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginRight: 20,
    marginBottom: 19.5,
    marginLeft: 20,
  },
  category: {
    fontFamily: 'DINPro-Medium',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.7)'
  },
  date: {
    fontFamily: 'DINPro-Light',
    fontSize: 15,
  },
  horizontalSeparator: {
    backgroundColor: 'rgb(238, 238, 238)',
    height: 1,
    marginLeft: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    marginLeft: 20
  },
  yardstick: {
    fontFamily: 'DINPro-Regular',
    fontSize: 18,
    color: 'rgb(83, 158, 255)'
  },
  verticalSeparatorOne: {
    backgroundColor: 'rgb(238, 238, 238)',
    height: 44,
    left: 76,
    position: 'absolute',
    width: 1,
  },
  rateButtonOne: {
    position: 'absolute',
    left: 97
  },
  notRatedButtonText: {
    fontFamily: 'DINPro-Regular',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  ratedButtonText: {
    fontFamily: 'DINPro-Regular',
    fontSize: 18,
    color: 'rgb(83, 158, 255)'
  },
  verticalSeparatorTwo: {
    backgroundColor: 'rgb(238, 238, 238)',
    height: 44,
    left: 135,
    position: 'absolute',
    width: 1,
  },
  rateButtonTwo: {
    position: 'absolute',
    left: 157
  },
  footerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginRight: 15,
    marginBottom: 19.5,
    marginLeft: 15,
  },
  previousButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  previousArrow: {
    marginRight: 10
  },
  previousText: {
    fontFamily: 'DINPro-Regular',
    fontSize: 15,
    marginLeft: 10,
    width: 70,
    color: 'rgba(0, 0, 0, 0.7)'
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nextText: {
    fontFamily: 'DINPro-Regular',
    fontSize: 15,
    width: 37,
    color: 'rgba(0, 0, 0, 0.7)'
  },
  nextArrow: {
    marginRight: 0,
    marginLeft: 10
  }
});
