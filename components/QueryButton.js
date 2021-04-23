import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../Styles';

// A Button component for querying the geoname api
export default function QueryButton({query, onSuccess, onError}) {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <TouchableOpacity 
      style={styles.searchButton}
      onPress={() => 
        onSearchCity(query, setLoading, onSuccess, onError)
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
function onSearchCity(query, setLoading, onSuccess, onError) {
  // Get data from api
  setLoading(true);
  fetch('http://api.geonames.org/search?' + getQueryString(query))
    .then(response => response.json())
    .then(
      data => onSuccess(data),
      () => onError()
    )
    .finally(() => setLoading(false));
}

// Gets the icon for the current query button state
function getIcon(loading){
  if(loading){
    return require('../assets/loading.gif');
  } else {
    return require('../assets/searchIcon.png');
  }
}

// Converts a key-value pair to a url query string
function getQueryString(queryObj){
  const pairs = [];
  for(const name in queryObj){
    // name=val for each pair
    pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(queryObj[name]));
  }
  // Add '&' between each pair
  return pairs.join('&');
}