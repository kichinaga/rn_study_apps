import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationButton } from 'src/common/components/NavigationButton';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const OutNavTabScreenComponent = ({ navigation }): ReactElement => (
  <View style={styles.mainView}>
    <Text>Moving Screen out Navigation Tab</Text>
    <NavigationButton callback={() => navigation.navigate('Detail', { screen: 'MOT' })} text="Moving on Tab" />
  </View>
);
