import React, { Component } from 'react';
import {
  TextInput,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import styles from '../styles/search';
import containerStyles from '../styles/container';
import searchIcon from '../assets/images/search.png';
import clearIcon from '../assets/images/close.png';
import profileImage from '../assets/images/profileImage.png';

export default class Verification extends Component {
  render() {
    const dimensions = Dimensions.get('window');
    const { height } = dimensions;
    const listHeight = height - 64;

    const results = [{
      key: 11,
      name: 'Silm\nMomoh',
      rating: 'OVERALL AVG: 2.1/5',
      profileImage
    },
    {
      key: 12,
      name: 'Silm\nMomoh',
      rating: 'OVERALL AVG: 2.1/5',
      profileImage
    }
    ];
    this.state = { };
    return (
      <View style={containerStyles.background}>
        <View style={styles.searchView}>
          <Image source={searchIcon} style={styles.searchIcon}/>
          <TextInput
            autoCorrect={false}
            placeholder='Search...'
            keyboardType='email-address'
            style={styles.searchBox}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity>
          <Image source={clearIcon} style={styles.clearButton}/>
          </TouchableOpacity>
        </View>
            <FlatList
              style={ { height: listHeight }}
              data={results}
              renderItem={({ item }) => <SearchResult developer={ item }>
                </SearchResult>}
            />
      </View>
    );
  }
}


class SearchResult extends Component {
  render() {
    this.state = {};
    return (
      <View style={styles.searchResult}>
        <Image source={profileImage} style={styles.devImage}/>
        <View style={styles.devInfoView}>
          <Text style={styles.devName}>Silm Momoh</Text>
          <Text style={styles.devLevel}>D3 Developer</Text>
        </View>
      </View>
    );
  }
}
