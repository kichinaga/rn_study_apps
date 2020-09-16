import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ThirdComponent = ({ navigation }) => (
  <View style={styles.mainView}>
    <Text>Third Screen</Text>
    <Button title="Go First" onPress={() => navigation.navigate('First')} />
    <Button title="Back Second" onPress={() => navigation.goBack()} />
    <Button title="Reset First" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'First' }] })} />
  </View>
);
