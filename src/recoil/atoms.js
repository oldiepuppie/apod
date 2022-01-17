import { atom } from 'recoil';
import sectionNames from './sectionNames';
import db from '../db';

const { DateView } = sectionNames;

export const sectionNameState = atom({
  key: 'sectionNameState',
  default: DateView,
});

const test = async () => {
  const bookmarkedItemsFromDB = await db.bookmarkedItems.toArray();
  return bookmarkedItemsFromDB;
};

export const bookmarkListState = atom({
  key: 'bookmarkListState',
  default: test(),
});
