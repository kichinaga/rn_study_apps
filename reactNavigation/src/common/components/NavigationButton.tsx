import React, { ReactElement, FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const colors = {
  navButton: '#2196F3',
  navButtonText: 'white',
};

const styles = StyleSheet.create({
  navigateButtonView: {
    marginVertical: 24,
    padding: 12,
    alignItems: 'center',
    backgroundColor: colors.navButton,
  },
  navigateButtonText: {
    color: colors.navButtonText,
  },
});

type NavigationButtonProps = {
  callback: () => void;
  text: string;
};

export const NavigationButton: FC<NavigationButtonProps> = ({ callback, text }): ReactElement => (
  <TouchableOpacity onPress={callback}>
    <View style={styles.navigateButtonView}>
      <Text style={styles.navigateButtonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);
