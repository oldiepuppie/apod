import { atom } from 'recoil';
import { sectionNames } from './sectionNames';

const { DateView, Bookmark } = sectionNames;

export const sectionNameState = atom({
  key: 'sectionNameState',
  default: DateView,
});

export const bookmarkListState = atom({
  key: 'bookmarkListState',
  default: [],
});
