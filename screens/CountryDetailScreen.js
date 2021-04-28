import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../Styles';

// Defines a screen which displays the most populous cities in the country
export default function CountryDetailsScreen({navigation,route}) {
  const { geonames } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{geonames[0].countryName}</Text>
      { geonames.map(city => (
        <View key={city.name} style={styles.button}>
          <Button 
            title={city.name} 
            onPress={() => navigation.navigate('CityDetail',{
              'cityResult': city
            })}/>
        </View>
      ))}
      <View style={{ flex: 1 }} />
    </View>
  );
}