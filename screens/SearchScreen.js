import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import styles from './Styles';

export default function CountrySearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEARCH BY CITY</Text>
      <View style={styles.button}>
        <TextInput style={styles.input}/>  
      </View>
      <View style={styles.button}>
        <Button title="SEARCH"/>  
      </View>
    </View>
  );
}