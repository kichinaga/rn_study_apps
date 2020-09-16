import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { InTabNavigator } from './InTabNavigator';
import { OutNavTabScreenComponent } from 'src/ui/MovingInTabs/OutNavTabScreenComponent';

const MITab = createBottomTabNavigator<MovingInTabsParamList>();

export const MobingInTabsNavigator = () => (
  <MITab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        switch (route.name) {
          case 'In':
            return <MaterialIcons name="home" size={size} color={color} />;
          case 'Out':
            return <MaterialIcons name="store" size={size} color={color} />;
          default:
            return '';
        }
      },
    })}
  >
    <MITab.Screen name="In" component={InTabNavigator} />
    <MITab.Screen name="Out" component={OutNavTabScreenComponent} />
  </MITab.Navigator>
);
