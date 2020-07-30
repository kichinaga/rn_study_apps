import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SecondComponent = ({ navigation }) => (
  <View style={styles.mainView}>
    <Text>Second Screen</Text>
    <Button title="Go Thirt" onPress={() => navigation.navigate('Third')} />
    <Button title="Back First" onPress={() => navigation.goBack()} />
  </View>
);
