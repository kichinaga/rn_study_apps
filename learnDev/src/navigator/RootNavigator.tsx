import React from "react";
import { StyleSheet, Button, View } from 'react-native';
import { Routings } from '../common/const';
import { FlatList } from "react-native-gesture-handler";


const RootNavigator = ({navigation}) => {
  return (
    <View style={styles.button_container}>
      <FlatList
        data={Routings}
        renderItem={({item}) => (
          <View style={styles.button_item}>
            <Button
              title={`move ${item.title} screen`}
              onPress={() => navigation.navigate(item.title)}
            />
          </View>
        )}
        keyExtractor={(item, _) => item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    marginHorizontal: 36
  },
  button_item: {
    marginVertical: 8,
  }
})

export default RootNavigator