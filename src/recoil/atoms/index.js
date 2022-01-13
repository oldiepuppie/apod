import { atom } from 'recoil';
import getDateTodayEST from '../../utilities/getDateTodayEST';

const dateTodayEST = getDateTodayEST();

export const dateTodayESTState = atom({
  key: 'dateTodayESTState',
  default: dateTodayEST,
});

export const pageState = atom({
  key: 'pageState',
  default: 'dateView',
});

export const bookmarkListState = atom({
  key: 'bookmarkListState',
  default: [],
});
