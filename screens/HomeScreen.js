import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../Styles';

// Defines the initial screen of the app when started
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CityPop</Text>
      <View style={styles.button}>
        <Button title="SEARCH BY CITY"/>  
      </View>
      <View style={styles.button}>
        <Button 
          title="SEARCH BY COUNTRY"
          onPress={() =>
            navigation.navigate('CountrySearch')
          }
        />
      </View>
    </View>
  );
}