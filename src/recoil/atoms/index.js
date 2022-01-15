import { atom } from 'recoil';
import getDateTodayEST from '../../utilities/getDateTodayEST';

const dateTodayEST = getDateTodayEST();

export const dateTodayESTState = atom({
  key: 'dateTodayESTState',
  default: dateTodayEST,
});

export const sectionNameState = atom({
  key: 'sectionNameState',
  default: 'dateView',
});

export const bookmarkListState = atom({
  key: 'bookmarkListState',
  default: [],
});
