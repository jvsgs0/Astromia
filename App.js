import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/homeScreen';
import MeteorScreen from './screens/meteoroScreen';
import IssScreen from './screens/eei';

const Stack = createStackNavigator(); 

export default class App extends React.Component{
 
  render() { 
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>        
          <Stack.Screen name="Meteoro" component={MeteorScreen}/>  
          <Stack.Screen name="ISS" component={IssScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );   
} 
} 
