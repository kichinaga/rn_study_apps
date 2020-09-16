import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const OutTabComponent = () => (
  <View style={styles.mainView}>
    <Text>Moving Out Navigation Screen</Text>
  </View>
);
