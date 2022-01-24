import { atom } from 'recoil';
import SectionNamesEnum from './SectionNamesEnum';
import db from '../db';

export const sectionNameState = atom({
  key: 'sectionNameState',
  default: SectionNamesEnum.DateView,
});

const test = async () => {
  const bookmarkedItemsFromDB = await db.bookmarkedItems.toArray();
  return bookmarkedItemsFromDB;
};

export const bookmarkListState = atom({
  key: 'bookmarkListState',
  default: test(),
});
