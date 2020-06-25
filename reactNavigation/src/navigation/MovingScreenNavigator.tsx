import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FirstComponent } from 'src/ui/MovingScreen/FirstComponent';
import { SecondComponent } from 'src/ui/MovingScreen/SecondComponent';

const MSStack = createStackNavigator<MovingScreenStackParamList>();

export function MovingScreenNavigator() {
  return (
    <MSStack.Navigator initialRouteName="First">
      <MSStack.Screen name="First" component={FirstComponent} />
      <MSStack.Screen name="Second" component={SecondComponent} />
    </MSStack.Navigator>
  );
}
