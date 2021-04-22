import { StyleSheet } from 'react-native';

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
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: '100%'
  },
  searchIcon: {
    resizeMode: 'contain',
    width: '65%',
    top: -230,
    left: 10
  },
  searchButton:{
    marginTop: 15,
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 30
  }
});