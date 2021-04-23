import { StyleSheet } from 'react-native';

// Defines a global style sheet for the entire project to make it easier to
// change variables across the entire project
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 36,
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
  searchIcon: {
    resizeMode: 'contain',
    width: '65%',
    top: -101,
    left: 10
  },
  searchButton:{
    marginTop: 15,
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
  }
});