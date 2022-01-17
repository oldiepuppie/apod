// TODO indexedDB 작업중

import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { bookmarkListState } from '../recoil/atoms';
import { bookmark } from '../recoil/index';

const useIndexedDB = (date) => {
  const list = useRecoilValue(bookmarkListState);

  useEffect(() => {
    const updateList = (list) => {
      if (list.some((item) => item.date !== date)) {
        [validItem, ...list];
      } else {
        [...list.filter((item) => item.date !== date)];
      }
    };
  }, [date, list]);
};

export default useIndexedDB;
