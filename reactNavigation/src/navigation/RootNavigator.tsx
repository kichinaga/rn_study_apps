import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeComponent } from '../HomeComponent';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeComponent} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
