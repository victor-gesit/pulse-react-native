import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../styles/onboardingOne';
import containerStyles from '../styles/container';
import artwork from '../assets/images/artwork.png';
import oval3 from '../assets/images/oval3.png';
import oval3grey from '../assets/images/oval3grey.png';


export default class OnboardingOne extends Component {
  render() {
    this.state = { };
    return (
      <View style={containerStyles.background}>
        <View style={styles.container}>
          <Image source={artwork} style={styles.artwork} />
          <Text style={styles.welcomeLabel}>
            Welcome
          </Text>
          <Text style={styles.andelaFeedbackLabel}>
            At Andela, your feedback matters.
            We want to hear what you think
          </Text>
        </View>
          <View style={styles.footerContainer} >
            <View style={styles.ovalShapesContainer}>
              <Image source={oval3}/>
              <Image source={oval3grey}/>
            </View>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
