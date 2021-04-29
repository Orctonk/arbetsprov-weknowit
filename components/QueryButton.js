import React from 'react';
import {GEONAMES_URL, getQueryString, validateResult} from '../util/QueryUtil'
import {Image, TouchableOpacity} from 'react-native';
import {styles} from '../Styles';

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
  queryString = getQueryString(query);
  // Check if query is empty
  if(!queryString){
    onError("Please enter a search term");
  } else {
    setLoading(true);
    fetch(GEONAMES_URL + queryString)
      .then(response => response.json())
      .then(
        data => {
          // Check if query return any results and return error if not
          if(validateResult(data)){
            onSuccess(data);
          } else {
            onError('No results found!');
          }
        },
        () => onError('Something went wrong, please try again later')
      )
      .finally(() => setLoading(false));
  }
}

// Gets the icon for the current query button state
function getIcon(loading){
  if(loading){
    return require('../assets/loading.gif');
  } else {
    return require('../assets/searchIcon.png');
  }
}