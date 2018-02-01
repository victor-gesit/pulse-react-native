import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import styles from '../styles/ratingCard';
import previousArrow from '../assets/images/previousArrow.png';
import nextArrow from '../assets/images/nextArrow.png';

export default class RatingCard extends Component {
  render() {
    this.state = {};
    return (
      <View style={styles.ratingCard}>
        <View style={styles.headerView}>
          <Text style={styles.category}>WORK OUTPUT</Text>
          <Text style={styles.date}>Aug 26, 2019</Text>
        </View>
        {/* Beginning of Work Output Rating */}
        <View>
          <View style={styles.horizontalSeparator}/>
          {/* Quality */}
          <View style={styles.row}>
            <Text style={styles.yardstick}>Quality</Text>
            <View style={styles.verticalSeparatorOne} />
            <TouchableOpacity style={styles.rateButtonOne}>
              <Text style={styles.notRatedButtonText}>Not Rated</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalSeparator}/>
          {/* Quantity */}
          <View style={styles.row}>
            <Text style={styles.yardstick}>Quantity</Text>
            <View style={styles.verticalSeparatorOne} />
            <TouchableOpacity style={styles.rateButtonOne}>
              <Text style={styles.notRatedButtonText}>Not Rated</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalSeparator}/>
          {/* Initiative */}
          <View style={styles.row}>
            <Text style={styles.yardstick}>Initiative</Text>
            <View style={styles.verticalSeparatorOne} />
            <TouchableOpacity style={styles.rateButtonOne}>
              <Text style={styles.notRatedButtonText}>Not Rated</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalSeparator}/>
        </View>
        {/* End of Work Output Rating */}
        <View style={styles.headerView}>
          <Text style={styles.category}>TEAM WORK</Text>
        </View>
        {/* Beginning of Work Team Work Rating */}
        <View>
          <View style={styles.horizontalSeparator}/>
          {/* Communication */}
          <View style={styles.row}>
            <Text style={styles.yardstick}>Communication</Text>
            <View style={styles.verticalSeparatorTwo} />
            <TouchableOpacity style={styles.rateButtonTwo}>
              <Text style={styles.ratedButtonText}>Very Unsatisfied</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalSeparator}/>
          {/* Professionalism */}
          <View style={styles.row}>
            <Text style={styles.yardstick}>Professionalism</Text>
            <View style={styles.verticalSeparatorTwo} />
            <TouchableOpacity style={styles.rateButtonTwo}>
              <Text style={styles.ratedButtonText}>Unsatisfied</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalSeparator}/>
          {/* Integration */}
          <View style={styles.row}>
            <Text style={styles.yardstick}>Integration</Text>
            <View style={styles.verticalSeparatorTwo} />
            <TouchableOpacity style={styles.rateButtonTwo}>
              <Text style={styles.notRatedButtonText}>Not Rated</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalSeparator}/>
        </View>
        <View style={styles.footerView}>
          <TouchableOpacity style={styles.previousButton}>
            <Image source={previousArrow}/>
            <Text style={styles.previousText}>PREVIOUS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextText}>NEXT</Text>
            <Image source={nextArrow} style={styles.nextArrow}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
