import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../styles/onboardingTwo';
import containerStyles from '../styles/container';
import artwork2 from '../assets/images/artwork2.png';
import oval3 from '../assets/images/oval3.png';
import oval3grey from '../assets/images/oval3grey.png';


export default class OnboardingTwo extends Component {
  render() {
    this.state = { };
    return (
      <View style={containerStyles.background}>
        <View style={styles.container}>
          <Image source={artwork2} style={styles.artwork} />
          <Text style={styles.easyCheckInLabel}>
            Easy Check-in
          </Text>
          <Text style={styles.tapToRateLabel}>
            At Andela, your feedback matters.
            We want to hear what you think
          </Text>
        </View>
          <View style={styles.footerContainer} >
            <View style={styles.ovalShapesContainer}>
              <Image source={oval3grey}/>
              <Image source={oval3}/>
            </View>
            <TouchableOpacity style={styles.getStartedButton}>
                <Text style={styles.getStartedButtonText}>
                  GET STARTED</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
