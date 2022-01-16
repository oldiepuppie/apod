// TODO indexedDB 작업중

import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { bookmarkListState } from '../recoil/atoms';
import { bookmark } from '../recoil/index';

const useIndexedDB = (date) => {
  indexedDB.open('bookmarkList', 1);
  const list = useRecoilValue(bookmarkListState);

  useEffect(() => {
    const isInList = (list) => {
      const validItem = list.filter((item) => item.date === date);
      if (validItem) {
        [validItem, ...list];
      } else {
        [...list.filter((item) => item.date !== date)];
      }
    };
  }, [date, list]);
};

export default useIndexedDB;
