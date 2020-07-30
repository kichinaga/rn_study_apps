import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeTabComponent } from 'src/ui/BottomTabScreens/HomeTabComponent';
import { SubTabComponent } from 'src/ui/BottomTabScreens/SubTabComponent';
import { SettingsTabComponent } from 'src/ui/BottomTabScreens/SettingsTabComponent';

const UTSTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabScreenNavigator = () => (
  <UTSTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        switch (route.name) {
          case 'Home':
            return <MaterialIcons name="home" size={size} color={color} />;
          case 'Sub':
            return <MaterialIcons name="store" size={size} color={color} />;
          case 'Settings':
            return <MaterialIcons name="settings" size={size} color={color} />;
          default:
            return '';
        }
      },
    })}
  >
    <UTSTab.Screen name="Home" component={HomeTabComponent} />
    <UTSTab.Screen name="Sub" component={SubTabComponent} />
    <UTSTab.Screen name="Settings" component={SettingsTabComponent} />
  </UTSTab.Navigator>
);
