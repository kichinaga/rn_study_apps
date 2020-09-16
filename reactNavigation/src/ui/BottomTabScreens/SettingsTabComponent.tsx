import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SettingsTabComponent = () => (
  <View style={styles.mainView}>
    <Text>Settings Tab Screen</Text>
  </View>
);
