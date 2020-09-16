import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const FirstComponent = ({ navigation }) => (
  <View style={styles.mainView}>
    <Text>First Screen</Text>
    <Button title="Go Second" onPress={() => navigation.navigate('Second')} />
  </View>
);
