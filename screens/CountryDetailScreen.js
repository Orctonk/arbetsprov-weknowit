import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../Styles';
import { GEONAMES_URL, getQueryString } from '../util/QueryUtil';

// Defines a screen which displays the most populous cities in the country
export default function CountryDetailsScreen({navigation,route}) {
  const [ cities, setCities ] = React.useState(null);
  const [ loadText, setLoadText ] = React.useState("Loading...");
  const { countryName, countryCode } = route.params;

  React.useEffect(() => {
    const query={
      'q': countryName,
      'country': countryCode,
      'username': 'weknowit',
      'maxRows': 3,
      'type': 'json',
      'featureClass': 'P',
      'orderby': 'population'
    };
    setLoadText("Loading...");
    fetch(GEONAMES_URL + getQueryString(query))
      .then(response => response.json())
      .then((data) => {
        setCities(data);
      })
      .catch(() => setLoadText("Failed to get cities!"));
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{countryName}</Text>
      { 
        cities ? (
          cities.geonames.map(city => (
            <View key={city.name} style={styles.button}>
              <Button 
                title={city.name} 
                onPress={() => navigation.navigate('CityDetail',{
                  'cityResult': city
                })}/>
            </View>
        ))) : (
          <Text>{loadText}</Text>
        )
      }
      <View style={{ flex: 1 }} />
    </View>
  );
}