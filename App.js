import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'

// Create a navigation stack to allow for easy navigation between different screens
const navStack = createStackNavigator();

export default function CityPop() {
  return (
    <NavigationContainer>
      <navStack.Navigator>
        <navStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
      </navStack.Navigator>
    </NavigationContainer>
  );
}