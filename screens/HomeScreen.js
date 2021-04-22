import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 48,
    marginVertical: 120
  },
  button: {
    width: '90%',
    marginTop: 10
  }
});