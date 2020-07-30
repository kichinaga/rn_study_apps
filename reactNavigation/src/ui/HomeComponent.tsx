import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const buttonColor = '#2196F3';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigateButtonView: {
    marginVertical: 24,
    padding: 12,
    alignItems: 'center',
    backgroundColor: buttonColor,
  },
  navigateButtonText: {
    color: 'white',
  },
});

export const HomeComponent = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={() => navigation.navigate('MovingScreen')}>
        <View style={styles.navigateButtonView}>
          <Text style={styles.navigateButtonText}>Moving between Screens</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UnderTab')}>
        <View style={styles.navigateButtonView}>
          <Text style={styles.navigateButtonText}>Under Tabs</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
