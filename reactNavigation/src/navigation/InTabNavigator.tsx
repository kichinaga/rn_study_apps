import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { InTabComponent } from 'src/ui/MovingInTabs/InTabComponent';
import { InNavTabScreenComponent } from 'src/ui/MovingInTabs/InNavTabScreenComponent';

const ITStack = createStackNavigator<InTabStackParamList>();

export const InTabNavigator = () => (
  <ITStack.Navigator initialRouteName="Main">
    <ITStack.Screen name="Main" component={InNavTabScreenComponent} />
    <ITStack.Screen name="Sub" component={InTabComponent} />
  </ITStack.Navigator>
);
