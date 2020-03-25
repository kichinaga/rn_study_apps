import React, { Fragment } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MemoContainer from './src/containers/Memo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MemoContainer></MemoContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
