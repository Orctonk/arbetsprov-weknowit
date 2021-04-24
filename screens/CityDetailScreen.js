import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Styles.js';

// Defines a screen which displays details about the specified city
export default function CityDetailsScreen({route}) {
  const { cityResult } = route.params;
  const {name, population} = cityResult;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.details}>
        <Text>POPULATION</Text>  
        <Text style={{fontSize: 32}}>{population}</Text>  
      </View>
    </View>
  );
}