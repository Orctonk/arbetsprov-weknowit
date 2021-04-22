import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

// Defines a screen which displays details about the specified city
export default function CityDetailsScreen({route}) {
  const { cityName, cityPopulation} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cityName}</Text>
      <View style={styles.details}>
        <Text>POPULATION</Text>  
        <Text style={{fontSize: 32}}>{cityPopulation}</Text>  
      </View>
    </View>
  );
}