import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeComponent } from '../ui/HomeComponent';

import { MovingScreenNavigator } from './MovingScreenNavigator';
import { UnderTabScreenNavigator } from './UnderTabScreenNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeComponent} />
        <RootStack.Screen name="MovingScreen" component={MovingScreenNavigator} />
        <RootStack.Screen name="UnderTab" component={UnderTabScreenNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
