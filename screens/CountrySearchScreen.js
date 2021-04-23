import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from '../Styles';
import QueryButton from '../components/QueryButton'

// Defines a screen where the user can search for a country by name
export default function CountrySearchScreen({navigation}) {
  const [inputCountry, onChangeText] = React.useState('Enter a Country');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEARCH BY COUNTRY</Text>
      <View style={styles.button}>
        <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Enter a Country'/>  
      </View>
    </View>
  );
}