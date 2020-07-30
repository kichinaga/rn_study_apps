import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SubTabComponent = () => (
  <View style={styles.mainView}>
    <Text>Sub Tab Screen</Text>
  </View>
);
