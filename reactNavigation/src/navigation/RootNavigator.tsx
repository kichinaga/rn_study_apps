import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeComponent } from '../ui/HomeComponent';

import { MovingScreenNavigator } from './MovingScreenNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeComponent} />
        <RootStack.Screen name="MovingScreen" component={MovingScreenNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
