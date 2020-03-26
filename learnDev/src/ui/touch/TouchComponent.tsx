import React, { FC } from "react";
import { StyleSheet, SafeAreaView, View } from 'react-native';
import ButtonBasic from "./ButtonBasicComponent";
import Touchable from "./TouchableComponent";
import { ScrollView } from "react-native-gesture-handler";

const TouchComponent: FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ButtonBasic />
        <View style={styles.hr} />
        <Touchable />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  hr: {
    height: 1,
    backgroundColor: '#000'
  }
})

export default TouchComponent