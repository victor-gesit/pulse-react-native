import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(239, 241, 245, 0.74)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleLabel: {
    height: 41,
    marginLeft: 12,
    marginTop: 66,
    color: 'rgba(0, 0, 0, 0.9)',
    fontFamily: 'DINPro-Medium',
    fontSize: 32,
  },
  reminderTitle: {
    marginLeft: 25,
    marginTop: 38,
    color: 'rgba(0, 0, 0, 0.9)',
    fontFamily: 'DINPro-Light',
    fontSize: 16
  },
  reminderButton: {
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 26
  },
  reminderText: {
    color: 'rgba(0, 0, 0, 0.9)',
    fontFamily: 'DINPro-Medium',
    fontSize: 18
  },
  pickerBorder: {
    backgroundColor: 'rgb(213, 213, 213)',
    height: 1
  },
  picker: {
    height: 185,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20
  },
  doneButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(4, 89, 228)',
    borderColor: 'rgb(4, 89, 228)',
    borderRadius: 19,
    borderWidth: 1,
    elevation: 1,
    height: 38,
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 20,
    width: 69
  },
  doneButtonText: {
    color: 'white',
    fontFamily: 'DINPro-Medium',
    fontSize: 11,
    textAlign: 'center',
  },
  accountTitle: {
    color: 'rgba(0, 0, 0, 1.0)',
    height: 21,
    fontFamily: 'DINPro-Light',
    fontSize: 16,
    marginLeft: 25,
    marginTop: 30,
    width: 58
  },
  logoutButton: {
    marginLeft: 25,
    marginTop: 15
  },
  logoutButtonText: {
    color: 'rgba(0, 0, 0, 0.9)',
    fontFamily: 'DINPro-Medium',
    fontSize: 18
  },
});
