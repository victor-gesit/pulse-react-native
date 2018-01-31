import React, { Component } from 'react';
import {
  TextInput,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../styles/verificationPage';
import containerStyles from '../styles/container';
import backImage from '../assets/images/back.png';


export default class Verification extends Component {
  render() {
    this.state = { };
    return (
      <View style={containerStyles.background}>
        <Image source={backImage} style={styles.backImage} />
        <View style={styles.container}>
          <Text style={styles.infoLabel}>
            Enter your email address to receive a code to confirm your identity
          </Text>
          <View style={styles.emailInputContainer}>
            <TextInput
              autoCorrect={false}
              placeholder='Your email address'
              keyboardType='email-address'
              style={styles.emailInputField}
              underlineColorAndroid="transparent"
            />
            <ActivityIndicator
              style={styles.activityIndicator} />
          </View>
          <TouchableOpacity
            style={styles.button}
            underlayColor='#fff'
            >
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
