import React, { FC, Fragment, memo, useState } from "react";
import { View, FlatList, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import Memo from '../types/Memo';


interface MemoProps {
  memos: Memo[];
  addMemo: (memo: Memo) => void;
}

const MemoComponent: FC<MemoProps> = ({memos, addMemo}) => {
  const [inputText, setInputText] = useState('');

  const addInputText = () => {
    if (inputText !== '') {
      addMemo({ key: `${memos.length + 1}`, value: inputText})
      setInputText('')
    }
  }

  return (
    <Fragment>
      <View>
        <TextInput
          style={styles.input_text}
          placeholder="メモを入力"
          value={inputText}
          onChangeText={(text) => setInputText(text)} />
        <TouchableOpacity onPress={addInputText}>
          <Text style={styles.plus}>ADD</Text>
        </TouchableOpacity>
      </View>
      <Text>INPUT: {inputText}</Text>
      <FlatList
          data={memos}
          extraData={memos.length}
          renderItem={({item}) => <Text style={styles.list_text}>{item.value}</Text>}
          keyExtractor={memo => memo.key}
        />

    </Fragment>
  )
}

const styles = StyleSheet.create({
  input_text: {
    height: 40
  },
  list_text: {
    flex: 1,
    justifyContent: 'center'
  },
  plus: {
    fontSize: 20,
    textAlign: 'center',
    color: '#4169e1',
    marginTop: 15,
    paddingLeft: 15,
  }
})

export default MemoComponent;