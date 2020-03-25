import React, { FC } from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import Bananas from "./BananasComponent";
import Greetings from "./GreetingsComponent";

const PropsComponent: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Bananas />
      <Greetings />
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

export default PropsComponent