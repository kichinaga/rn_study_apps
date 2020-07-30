import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTabComponent } from 'src/ui/UnderTabScreens/HomeTabComponent';
import { SubTabComponent } from 'src/ui/UnderTabScreens/SubTabComponent';
import { SettingsTabComponent } from 'src/ui/UnderTabScreens/SettingsTabComponent';

const UTSTab = createBottomTabNavigator<UnderTabParamList>();

export const UnderTabScreenNavigator = () => (
  <UTSTab.Navigator>
    <UTSTab.Screen name="Home" component={HomeTabComponent} />
    <UTSTab.Screen name="Sub" component={SubTabComponent} />
    <UTSTab.Screen name="Settings" component={SettingsTabComponent} />
  </UTSTab.Navigator>
);
