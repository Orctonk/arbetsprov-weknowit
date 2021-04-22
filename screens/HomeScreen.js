import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './Styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CityPop</Text>
      <View style={styles.button}>
        <Button title="SEARCH BY CITY"/>  
      </View>
      <View style={styles.button}>
        <Button title="SEARCH BY COUNTRY"/>  
      </View>
    </View>
  );
}