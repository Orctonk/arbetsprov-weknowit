import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

// Defines a screen where the user can search for a city by name
export default function CountrySearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEARCH BY CITY</Text>
      <View style={styles.button}>
        <TextInput style={styles.input}/>  
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <Image 
          style={styles.searchIcon}
          source={require('../assets/searchIcon.png')}
        />
      </TouchableOpacity>
    </View>
  );
}