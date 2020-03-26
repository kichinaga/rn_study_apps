import React, { FC } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const ButtonBasic: FC = () => {
  const tapped = () => {
    alert('You tapped the button!')
  }

  return  (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={tapped} title='Press Me' />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={tapped} title='Press Me' color='#841584' />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={tapped} title='This looks grate!' />
        <Button onPress={tapped} title='OK!' color='#841584' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ButtonBasic
