import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../styles/completed';
import backImage from '../assets/images/backWhite.png';


export default class Verification extends Component {
  render() {
    this.state = { };
    return (
      <View style={styles.background}>
        <TouchableOpacity style={styles.backButton} >
        <Image source={backImage}/>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.thankyouLabel}>
            Thank you for giving us insights that really matter :)
          </Text>
          <TouchableOpacity
            style={styles.button}
            underlayColor='#fff'
            >
            <Text style={styles.buttonText}>DONE!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
