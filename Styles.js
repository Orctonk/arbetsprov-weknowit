import { StyleSheet } from 'react-native';

// Defines a global style sheet for the entire project to make it easier to
// change variables across the entire project
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 32,
    marginVertical: '25%'
  },
  button: {
    width: '90%',
    marginTop: 10
  },
  input: {
    padding: 10,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: '100%'
  },
  errorInput: {
    padding: 10,
    height: 40,
    borderColor: '#ff0000',
    borderWidth: 1,
    width: '100%'
  },
  searchIcon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    top: 7,
    left: 7
  },
  searchButton:{
    marginVertical: 15,
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 30
  },
  details: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  errorMessage: {
    fontSize: 16,
    marginTop: 10,
    color: "#FF0000"
  },
});

// Gets the correct input box style depending on the current error state
const getInputStyle = function(error) {
  if(error){
    return styles.errorInput;
  } else {
    return styles.input;
  }
}

export { styles, getInputStyle }