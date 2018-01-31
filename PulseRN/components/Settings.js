import React, { Component } from 'react';
import {
  Text,
  View,
  DatePickerIOS,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/settings';
import containerStyles from '../styles/container';


export default class Developers extends Component {
  render() {
    this.state = { };
    const chosenDate = new Date();
    return (
      <View style={containerStyles.background}>
            <Text style={styles.titleLabel}>Settings</Text>
            <Text style={styles.reminderTitle}>Weekly Reminder</Text>
            <TouchableOpacity style={styles.reminderButton}>
              <Text style={styles.reminderText}>Fri @ 12:30 PM</Text>
            </TouchableOpacity>
            <View style={styles.pickerBorder}/>
            <DatePickerIOS
              date={chosenDate}
              onDateChange={ () => {} }
              style={styles.picker}>

            </DatePickerIOS>
            <View style={styles.pickerBorder}/>
            <TouchableOpacity style={styles.doneButton} >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
            <Text style={styles.accountTitle}>Account</Text>
            <TouchableOpacity style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Log out</Text>
            </TouchableOpacity>
      </View>
    );
  }
}
