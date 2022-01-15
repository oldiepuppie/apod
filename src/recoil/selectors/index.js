import { selector } from 'recoil';
import { bookmarkListState } from '../atoms';

// TODO 북마크구현에 사용하려 했으나 보류
export const bookmarkSelector = selector({
  key: 'bookmarkSelector',
  get: ({ get }) => {},
  set: ({ set, get }, newData) => {
    const test = get(bookmarkListState);
    console.log(typeof test);
    set(test, [newData, ...test]);
  },
});
