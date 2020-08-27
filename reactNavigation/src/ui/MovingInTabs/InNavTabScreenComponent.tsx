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

export const InNavTabScreenComponent = ({ navigation }) => (
  <View style={styles.mainView}>
    <Text>Moving Screen in Navigation Tab</Text>
    <NavigationButton callback={() => navigation.navigate('Sub')} text="Moving in Tab" />
  </View>
);
