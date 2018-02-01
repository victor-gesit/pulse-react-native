import React, { Component } from 'react';
import {
  TextInput,
  Button,
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
        <TouchableOpacity style={verifyScreenStyles.backButton}>
          <Image source={backImage}/>
        </TouchableOpacity>
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
        </View>
        <View style={verifyScreenStyles.footerContainer} >
          <Text style={verifyScreenStyles.didNotReceiveCodeText}>
              Didn't receive any code? </Text>
          <Button
            style={verifyScreenStyles.resendCodeButton}
            onPress={ () => {} }
            title="Resend"
          />
        </View>
      </View>
    );
  }
}
