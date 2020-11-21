import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ListViewScreen from '../screens/ListViewScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListView" component={ListViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStackNavigator;
