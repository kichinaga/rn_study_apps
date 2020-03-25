import React, { FC } from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import Blink from './BlinkComponent';

const StateComponent: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Blink text='I love to blink' />
      <Blink text='Yes blinking is so great' />
      <Blink text='Why did they ever take this out of HTML' />
      <Blink text='Look at me look at me look at me' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default StateComponent