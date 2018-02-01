import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import RatingCard from './RatingCard';
import styles from '../styles/rating';
import backImage from '../assets/images/backWhite.png';


export default class Verification extends Component {
  render() {
    this.state = { };
    return (
      <View style={styles.background}>
        <TouchableOpacity>
          <Image source={backImage} style={ styles.backButton } />
        </TouchableOpacity>
        <Text style={styles.devName}>Momoh Silm</Text>
        <Text style={styles.devLevel}>D1 Developer</Text>
        <Text style={styles.satisfactionQuestion}>
            How happy are you with Momoh’s work this week?</Text>
        <View style={styles.cardsContainer} >
          <View>
            <RatingCard/>
          </View>
          <View style={styles.cardSpace}/>
          <View style={styles.previewCard}>
            <RatingCard/>
          </View>
        </View>
      </View>
    );
  }
}
