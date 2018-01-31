import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import onboardingTwoStyles from '../styles/onboardingTwo';
import containerStyles from '../styles/container';
import artwork2 from '../assets/images/artwork2.png';
import oval3 from '../assets/images/oval3.png';
import oval3grey from '../assets/images/oval3grey.png';


export default class OnboardingTwo extends Component {
  render() {
    this.state = { };
    return (
      <View style={containerStyles.background}>
        <View style={onboardingTwoStyles.container}>
          <Image source={artwork2} style={onboardingTwoStyles.artwork} />
          <Text style={onboardingTwoStyles.easyCheckInLabel}>
            Easy Check-in
          </Text>
          <Text style={onboardingTwoStyles.tapToRateLabel}>
            At Andela, your feedback matters.
            We want to hear what you think
          </Text>
        </View>
          <View style={onboardingTwoStyles.footerContainer} >
            <View style={onboardingTwoStyles.ovalShapesContainer}>
              <Image source={oval3grey}/>
              <Image source={oval3}/>
            </View>
            <TouchableOpacity style={onboardingTwoStyles.getStartedButton}>
                <Text style={onboardingTwoStyles.getStartedButtonText}>
                  GET STARTED</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
