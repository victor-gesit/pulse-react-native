import React, { Component } from 'react';
import {
  Platform,
  TextInput,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import verificationScreenStyles from '../styles/verificationPage';
import containerStyles from '../styles/container';
import backImage from '../assets/images/back.png';


export default class Verification extends Component {


  render() {
    this.state = { };
    return (
      <View style={containerStyles.background}>
        <Image source={backImage} style={verificationScreenStyles.backImage} />
        <View style={verificationScreenStyles.container}>
          <Text style={verificationScreenStyles.infoLabel}>
            Enter your email address to receive a code to confirm your identity
          </Text>
          <View style={verificationScreenStyles.emailInputContainer}>
            <TextInput
              autoCorrect={false}
              placeholder='Your email address'
              style={verificationScreenStyles.emailInputField}
              underlineColorAndroid="transparent"
            />
            <ActivityIndicator style={verificationScreenStyles.activityIndicator} />
          </View>
          <TouchableOpacity
            style={verificationScreenStyles.button}
            underlayColor='#fff'
            >
            <Text style={verificationScreenStyles.buttonText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
