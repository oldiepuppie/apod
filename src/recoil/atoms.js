import { atom } from 'recoil';
import SectionNamesEnum from './SectionNamesEnum';
import db from '../db';

export const sectionNameState = atom({
  key: 'sectionNameState',
  default: SectionNamesEnum.DateView,
});

const getBookmarkListFromDB = async () => {
  const bookmarkedItemsFromDB = await db.bookmarkedItems.toArray();
  const sortedBookmarksList = await bookmarkedItemsFromDB.sort((a, b) => b.createdAt - a.createdAt);
  return sortedBookmarksList;
};

export const bookmarkListState = atom({
  key: 'bookmarkListState',
  default: getBookmarkListFromDB(),
});
