import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeComponent } from 'src/ui/HomeComponent';

import { MovingScreenNavigator } from './MovingScreenNavigator';
import { BottomTabScreenNavigator } from './BottomTabScreenNavigator';
import { MobingInTabsNavigator } from './MovingInTabsNavigator';
import { DetailNavigator } from './DetailNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeComponent} />
        <RootStack.Screen name="MovingScreen" component={MovingScreenNavigator} />
        <RootStack.Screen name="BottomTab" component={BottomTabScreenNavigator} />
        <RootStack.Screen name="MovingInTabs" component={MobingInTabsNavigator} />
        <RootStack.Screen name="Detail" component={DetailNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
