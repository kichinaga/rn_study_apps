import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationButton } from 'src/common/components/NavigationButton';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const InTabComponent = ({ navigation }) => (
  <View style={styles.mainView}>
    <Text>Moving In Navigation Screen</Text>
    <NavigationButton callback={() => navigation.goBack()} text="Back" />
  </View>
);
