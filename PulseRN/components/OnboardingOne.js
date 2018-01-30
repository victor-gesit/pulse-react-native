import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import onboardingOneStyles from '../styles/onboardingOne';
import containerStyles from '../styles/container';
import artwork from '../assets/images/artwork.png';
import oval3 from '../assets/images/oval3.png';
import oval3grey from '../assets/images/oval3grey.png';


export default class OnboardingOne extends Component {
  render() {
    this.state = { };
    return (
      <View style={containerStyles.background}>
        <View style={onboardingOneStyles.container}>
          <Image source={artwork} style={onboardingOneStyles.artwork} />
          <Text style={onboardingOneStyles.welcomeLabel}>
            Welcome
          </Text>
          <Text style={onboardingOneStyles.andelaFeedbackLabel}>
            At Andela, your feedback matters.
            We want to hear what you think
          </Text>
        </View>
          <View style={onboardingOneStyles.footerContainer} >
            <View style={onboardingOneStyles.ovalShapesContainer}>
              <Image source={oval3}/>
              <Image source={oval3grey}/>
            </View>
            <TouchableOpacity style={onboardingOneStyles.nextButton}>
                <Text style={onboardingOneStyles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
