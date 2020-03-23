import React, { FC, Fragment, memo } from "react";
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Memo from '../types/Memo';


interface MemoProps {
  memos: Memo[];
  add: (Memo) => void;
}

const MemoComponent: FC<MemoProps> = ({memos, add}) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <FlatList
          data={memos}
          renderItem={({item}) => <Text>{item.value}</Text>}
          keyExtractor={memo => memo.key}
        />
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
  }
})

export default MemoComponent;