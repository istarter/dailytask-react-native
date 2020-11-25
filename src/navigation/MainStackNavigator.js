import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ListViewScreen from '../screens/ListViewScreen';
import HomeScreen from '../screens/HomeScreen';
import ToysScreenList from '../screens/ToysScreenList';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List View" component={ListViewScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Toys"
          component={ToysScreenList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
