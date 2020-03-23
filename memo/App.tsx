import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoContainer from './src/containers/Memo';

export default function App() {
  return (
    <Fragment>
      <View style={styles.container}>
        <MemoContainer></MemoContainer>
      </View>
    </Fragment>
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
