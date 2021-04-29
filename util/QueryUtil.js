const GEONAMES_URL = 'http://api.geonames.org/search?';

// Converts a key-value pair to a url query string, returns null if a value is missing
function getQueryString(queryObj){
  const pairs = [];
  for(const name in queryObj){
    if(!queryObj[name]){
      return null;
    }
    // name=val for each pair
    pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(queryObj[name]));
  }
  // Add '&' between each pair
  return pairs.join('&');
}

// Checks to ensure that the result of the query is good to display
function validateResult(data){
  const { totalResultsCount } = data;

  if(totalResultsCount == 0){
    return false;
  }

  return true;
}

export { getQueryString, validateResult, GEONAMES_URL }