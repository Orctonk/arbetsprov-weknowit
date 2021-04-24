import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {styles, getInputStyle} from '../Styles';
import QueryButton from '../components/QueryButton'

// Defines a screen where the user can search for a country by name
export default function CountrySearchScreen({navigation}) {
  const [inputCountry, onChangeText] = React.useState(null);
  const [error, setError] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEARCH BY COUNTRY</Text>
      <View style={styles.button}>
        <TextInput 
          style={getInputStyle(error)}
          onChangeText={(text) => {
            onChangeText(text);
            setError(null);
          }}
          placeholder='Enter a Country'/>  
      </View>
      { 
        // Render error message if there is one
        !error ? null : (
        <Text style={styles.errorMessage}>{error}</Text>
      )}
      <QueryButton 
        query={{
          'q': inputCountry,
          'username': 'weknowit',
          'maxRows': 3,
          'type': 'json',
          'featureClass': 'P',
          'orderby': 'population'
        }}
        onSuccess={(result) => {
          navigation.navigate('CountryDetail', result);
          setError(null);
        }} 
        onError={setError}/>
    </View>
  );
}