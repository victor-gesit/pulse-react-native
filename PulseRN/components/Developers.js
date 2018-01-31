import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import styles from '../styles/developers';
import containerStyles from '../styles/container';
import profileImage from '../assets/images/profileImage.png';


export default class Developers extends Component {
  render() {
    this.state = { };
    const dimensions = Dimensions.get('window');
    const { width } = dimensions;
    const { height } = dimensions;
    const padding = (width - 320) / 3;
    const listHeight = height - 41;
    const renderHeader = () => (
        <Text
            style={styles.developersLabel}
            >Developers
        </Text>);
    const developers = [
      {
        key: 1,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 2,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 3,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 4,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 5,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 6,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 7,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 8,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 9,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 10,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
        key: 11,
        name: 'Silm\nMomoh',
        rating: 'OVERALL AVG: 2.1/5',
        profileImage
      },
      {
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
    return (
      <View style={containerStyles.background}>
          <View style={styles.navbarView}>
            <Text style={styles.navbarText}>Developers</Text>
          </View>
          <View style={styles.developers}>
            <FlatList
              style={ { height: listHeight }}
              data={developers}
              ListHeaderComponent={ renderHeader }
              columnWrapperStyle={ { justifyContent: 'space-between', padding, paddingTop: 0 } }
              numColumns={2}
              renderItem={({ item }) => <DeveloperCell developer={ item }></DeveloperCell>}
            />
          </View>
      </View>
    );
  }
}

class DeveloperCell extends Component {
  render() {
    this.state = { };
    const { developer } = this.props;
    return (
      <View style={styles.developerCell} >
        <Image source={ developer.profileImage}
          style={styles.developerImage}/>
        <Text style={styles.nameText} >{developer.name}</Text>
        <Text style={styles.ratingLabel}>{developer.rating}</Text>
      </View>
    );
  }
}

