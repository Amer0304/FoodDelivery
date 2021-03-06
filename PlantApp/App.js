import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

//screens 
import { Home, PlantDetail } from './screens';
import { EXPECTED_COLOR } from 'jest-matcher-utils';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown:false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Home} options={{
          headerShown:false
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default () =>{
  return <App />
}