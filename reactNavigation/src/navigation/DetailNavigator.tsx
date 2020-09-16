import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OutTabComponent } from 'src/ui/Details/OutTabComponent';

const DStack = createStackNavigator<DetailStackParamList>();

export const DetailNavigator = () => (
  <DStack.Navigator>
    <DStack.Screen name="MOT" component={OutTabComponent} />
  </DStack.Navigator>
);
