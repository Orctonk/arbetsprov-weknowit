import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../Styles';

// A Button component for querying the geoname api
export default function QueryButton({navigation, cityName, onError}) {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <TouchableOpacity 
      style={styles.searchButton}
      onPress={() => 
        onSearchCity(cityName, setLoading, onError, navigation)
      }>
      <Image 
        style={styles.searchIcon}
        source={getIcon(isLoading)}
      />
    </TouchableOpacity>
  );
}

// Searches for a specific city name and navigates to the detail screen
// or triggers a provided error hook on error
function onSearchCity(cityName, setLoading, onError, navigation) {
  // Check name length
  if(cityName.length == 0){
    onError();
  } else {
    // Get data from api
    setLoading(true);
    fetch("http://api.geonames.org/search?username=weknowit&maxRows=1&type=json&name="+cityName)
      .then(response => response.json())
      .then(data => navigation.navigate('CityDetail', {
        'cityName': data.geonames[0].name, 
        'cityPopulation': data.geonames[0].population
      }))
      .catch(() => {onError()})
      .then(() => setLoading(false));
  }
}

function getIcon(loading){
  if(loading){
    return require('../assets/loading.gif');
  } else {
    return require('../assets/searchIcon.png');
  }
}