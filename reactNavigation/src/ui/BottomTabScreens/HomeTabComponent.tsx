import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const HomeTabComponent = () => (
  <View style={styles.mainView}>
    <Text>Home Tab Screen</Text>
  </View>
);
