import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FirstComponent } from 'src/ui/MovingScreen/FirstComponent';
import { SecondComponent } from 'src/ui/MovingScreen/SecondComponent';
import { ThirdComponent } from 'src/ui/MovingScreen/ThirdComponent';

const MSStack = createStackNavigator<MovingScreenStackParamList>();

export function MovingScreenNavigator() {
  return (
    <MSStack.Navigator initialRouteName="First">
      <MSStack.Screen name="First" component={FirstComponent} />
      <MSStack.Screen name="Second" component={SecondComponent} />
      <MSStack.Screen name="Third" component={ThirdComponent} />
    </MSStack.Navigator>
  );
}
