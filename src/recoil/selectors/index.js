import { selector } from 'recoil';

export const turnedPageState = selector({
  key: 'turnedPageState',
  get: ({ get }) => {
    const currentPage = get(pageState);
  },
});
