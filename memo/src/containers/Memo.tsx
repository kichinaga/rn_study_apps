import Memo from '../types/Memo';
import React, { useState, FC } from 'react';
import MemoComponent from '../components/Memo';

const useMemo = (initMemos: Memo[]): [Memo[], (memo: Memo) => void] => {
  const [memos, setMemo] = useState(initMemos);

  // TODO: なぜ memos.push(memo) => setMemo(memos)ではダメなのか
  const addMemo = (memo: Memo) => {
    setMemo(memos => [...memos, memo]);
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
    <MemoComponent memos={memos} addMemo={addMemo} />
  )
}

export default MemoContainer;