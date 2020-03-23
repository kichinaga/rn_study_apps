import Memo from '../types/Memo';
import React, { useState, FC } from 'react';
import MemoComponent from '../components/Memo';


const useMemo = (initMemos: Memo[]): [Memo[], (Memo) => void] => {
  const [memos, setMemo] = useState(initMemos);

  const addMemo = (memo: Memo) => {
    memos.push(memo);
    setMemo(memos);
  }

  return [memos, addMemo];
}

const MemoContainer: FC = () => {
  const INIT_MEMOS = [
    {key: '1', value: 'テスト'},
    {key: '2', value: 'サンプル'},
    {key: '3', value: 'ホゲホゲ'},
  ];
  const [memos, addMemo] = useMemo(INIT_MEMOS);

  return (
    <MemoComponent memos={memos} add={addMemo} />
  )
}

export default MemoContainer;