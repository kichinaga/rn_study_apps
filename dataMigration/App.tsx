import React, { FC, Fragment, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import * as FileSystem from 'expo-file-system'

const App: FC = () => {
  const [counter, setCounter] = useState(0);

  const _increment = () => {
    setCounter(counter + 1)
  }

  const _decrement = () => {
    setCounter(counter - 1)
  }

  const _saveFile = () => {
    ToastAndroid.show(`Doc Dir: ${FileSystem.documentDirectory}`, ToastAndroid.LONG)
    ToastAndroid.show(`cache Dir: ${FileSystem.cacheDirectory}`, ToastAndroid.LONG)
    console.log(`Doc Dir: ${FileSystem.documentDirectory}`)
    console.log(`cache Dir: ${FileSystem.cacheDirectory}`)
  }

  const _loadFile = async () => {
    try {
      const json = await FileSystem.readAsStringAsync(FileSystem.cacheDirectory + 'counter.txt')
      const obj = JSON.parse(json)
      console.log(obj)
      ToastAndroid.show(`counter: ${obj.counter}`, ToastAndroid.SHORT)
      setCounter(obj.counter)
    } catch(e) {
      ToastAndroid.show(`failure load counter.txt`, ToastAndroid.SHORT)
    }
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.counter_text}>{counter}</Text>
        <TouchableWithoutFeedback
          onPress={_increment}>
            <View style={styles.button_success}>
              <Text style={styles.button_text}>+1</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={_decrement}>
            <View style={styles.button_warning}>
              <Text style={styles.button_text}>-1</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={_saveFile}>
            <View style={styles.button_success}>
              <Text style={styles.button_text}>save</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={_loadFile}>
            <View style={styles.button_warning}>
              <Text style={styles.button_text}>load</Text>
            </View>
        </TouchableWithoutFeedback>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter_text: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  button_text: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },
  button_success: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#5cb85c'
  },
  button_warning: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#f0ad4e'
  }
});

export default App;