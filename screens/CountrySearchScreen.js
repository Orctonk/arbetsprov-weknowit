import React from 'react';
import {Text, View, KeyboardAvoidingView, TextInput} from 'react-native';
import {styles, getInputStyle} from '../Styles';
import QueryButton from '../components/QueryButton'

// Defines a screen where the user can search for a country by name
export default function CountrySearchScreen({navigation}) {
  const [inputCountry, onChangeText] = React.useState(null);
  const [error, setError] = React.useState(null);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "margin"} 
      style={styles.container}>
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
          'name': inputCountry,
          'username': 'weknowit',
          'maxRows': 1,
          'isNameRequired': true,
          'type': 'json',
          'featureCode': 'PCLI',
          'orderby': 'population'
        }}
        onSuccess={(result) => {
          navigation.navigate('CountryDetail', result.geonames[0]);
          setError(null);
        }} 
        onError={setError}/>
        <View style={{ flex: 1 }} />
    </KeyboardAvoidingView>
  );
}