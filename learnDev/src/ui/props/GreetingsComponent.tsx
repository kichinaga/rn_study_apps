import React, { FC } from "react";
import { StyleSheet, View, Text } from 'react-native';

interface GreetingProps {
  name: string
}

const Greeting: FC<GreetingProps> = ({name = 'world'}) => (
  <View style={styles.greeting_item}>
    <Text>Hello, {name}</Text>
  </View>
)

const Greetings: FC = () => (
  <View style={styles.greetings}>
    <Greeting name='taro' />
    <Greeting name='hanako' />
    <Greeting name='Yoichi Ochiai' />
  </View>
)

const styles = StyleSheet.create({
  greeting_item: {
    alignItems: 'center'
  },
  greetings: {
    alignItems: 'center',
    top: 50
  }
})

export default Greetings