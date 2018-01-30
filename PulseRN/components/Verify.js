import React, { Component } from 'react';
import {
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import verifyScreenStyles from '../styles/verifyPage';
import containerStyles from '../styles/container';
import backImage from '../assets/images/back.png';


export default class Verify extends Component {
  render() {
    this.state = { };
    return (
      <View style={containerStyles.background}>
        <Image source={backImage} style={verifyScreenStyles.backImage} />
        <View style={verifyScreenStyles.container}>
          <Text style={verifyScreenStyles.infoLabel}>
            Enter the 4 digit code sent to your email
          </Text>
          <View style={verifyScreenStyles.codeInputContainer}>
            <TextInput
              autoCorrect={false}
              placeholder='1'
              keyboardType='numeric'
              style={verifyScreenStyles.codeInputField}
              underlineColorAndroid="transparent"
            />
            <View style={verifyScreenStyles.separatorView}/>
            <TextInput
              autoCorrect={false}
              placeholder='1'
              keyboardType='numeric'
              style={verifyScreenStyles.codeInputField}
              underlineColorAndroid="transparent"
            />
            <View style={verifyScreenStyles.separatorView}/>
            <TextInput
              autoCorrect={false}
              placeholder='1'
              keyboardType='numeric'
              style={verifyScreenStyles.codeInputField}
              underlineColorAndroid="transparent"
            />
            <View style={verifyScreenStyles.separatorView}/>
            <TextInput
              autoCorrect={false}
              placeholder='1'
              keyboardType='numeric'
              style={verifyScreenStyles.codeInputField}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity
            style={verifyScreenStyles.button}
            underlayColor='#fff'
            >
            <Text style={verifyScreenStyles.buttonText}>VERIFY</Text>
          </TouchableOpacity>
          <Text style={verifyScreenStyles.didNotReceiveCodeText}>
            Didn't receive any code? </Text>
        </View>
      </View>
    );
  }
}
