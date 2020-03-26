import React, { FC, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const PizzaTranslator: FC = () => {
  const [inputText, setInputText] = useState('')

  return (
    <View style={styles.pizza_container}>
      <TextInput
        style={styles.text_input}
        placeholder='Type here to translate!'
        onChangeText={(text) => setInputText(text)}
        onSubmitEditing={(e) => setInputText(e.nativeEvent.text.split('').reverse().join(''))}
        value={inputText}
      />
      <Text style={styles.text_pizza}>
        {inputText.split(' ').map(word => word && '🍕').join(' ')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pizza_container: {
    padding: 10
  },
  text_input: {
    height: 40
  },
  text_pizza: {
    padding: 10,
    fontSize: 42,
  }
})

export default PizzaTranslator