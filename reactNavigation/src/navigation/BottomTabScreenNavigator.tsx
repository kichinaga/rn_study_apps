import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTabComponent } from 'src/ui/BottomTabScreens/HomeTabComponent';
import { SubTabComponent } from 'src/ui/BottomTabScreens/SubTabComponent';
import { SettingsTabComponent } from 'src/ui/BottomTabScreens/SettingsTabComponent';

const UTSTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabScreenNavigator = () => (
  <UTSTab.Navigator>
    <UTSTab.Screen name="Home" component={HomeTabComponent} />
    <UTSTab.Screen name="Sub" component={SubTabComponent} />
    <UTSTab.Screen name="Settings" component={SettingsTabComponent} />
  </UTSTab.Navigator>
);
