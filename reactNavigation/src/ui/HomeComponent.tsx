import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationButton } from 'src/common/components/NavigationButton';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const HomeComponent = ({ navigation }): ReactElement => {
  return (
    <View style={styles.mainView}>
      <NavigationButton callback={() => navigation.navigate('MovingScreen')} text="Moving between Screens" />
      <NavigationButton callback={() => navigation.navigate('BottomTab')} text="Bottom Tabs" />
      <NavigationButton callback={() => navigation.navigate('MovingInTabs')} text="Moving in Tabs" />
    </View>
  );
};
