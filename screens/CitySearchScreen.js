import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {styles, getInputStyle} from '../Styles.js';
import QueryButton from '../components/QueryButton'

// Defines a screen where the user can search for a city by name
export default function CitySearchScreen({navigation}) {
  const [inputCity, onChangeText] = React.useState(null);
  const [error, setError] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEARCH BY CITY</Text>
      <View style={styles.button}>
        <TextInput 
          style={getInputStyle(error)}
          onChangeText={(text) => {
            onChangeText(text);
            setError(null);
          }}
          placeholder='Enter a city'/>  
      </View>
      { 
        // Render error message if there is one
        !error ? null : (
        <Text style={styles.errorMessage}>{error}</Text>
      )}
      <QueryButton 
        query={{
          'name': inputCity,
          'username': 'weknowit',
          'maxRows': 1,
          'type': 'json',
          'featureClass': 'P'
        }}
        onSuccess={ (result) => {
          navigation.navigate('CityDetail', {'cityResult': result.geonames[0]});
          setError(null);
        }} 
        onError={setError}/>
    </View>
  );
}