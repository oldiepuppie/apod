import { useState } from 'react';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import getDateTodayEST from '../utilities/getDateTodayEST';
import useGetApod from '../hooks/useGetApod';
import { useRecoilState } from 'recoil';
import sectionNames from '../recoil/sectionNames';
import { bookmarkListState } from '../recoil/atoms';
import db from '../db';
import DateInput from '../containers/date-view/DateInput';
import MediaContainer from '../containers/date-view/MediaContainer';
import ErrorMessage from '../components/dateViewSection/ErrorMessage';

const DateViewContainer = () => {
  const { DateView } = sectionNames;
  useSetSectionNameState(DateView);

  const todayDateString = getDateTodayEST();
  const [dateInput, setDateInput] = useState(todayDateString);

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);
  const { data } = apodData;
  const { code, date } = data;

  const [list, setList] = useRecoilState(bookmarkListState);

  const addToBookmark = async (item) => {
    try {
      await db.bookmarkedItems.add(item);
      setList([item, ...list]);
    } catch (error) {
      alert(error);
    }
  };

  const removeFromBookmark = async (date) => {
    try {
      await db.bookmarkedItems.delete(date);
      setList(list.filter((item) => item.date !== date));
    } catch (error) {
      alert(error);
    }
  };

  const bookmarkButtonHandler = (e) => {
    e.stopPropagation();
    const isBookmarkedItem = list.some((item) => item.date === date);

    if (!isBookmarkedItem) {
      addToBookmark(data);
    } else {
      removeFromBookmark(date);
    }
  };

  return (
    <main className='DateViewContainer'>
      <h2 className='mb-3 font-extrabold text-2xl text-darkGray border-b border-lightGray'>Date View</h2>
      <DateInput onClickHandler={onClickHandler} />
      {apodData.isGetApodLoading ? (
        <section className='loadingSpinnerContainer'>
          <div>Loading...</div>
        </section>
      ) : code ? (
        <ErrorMessage code={code} />
      ) : (
        <MediaContainer
          id={apodData.data.date}
          title={apodData.data.title}
          copyright={apodData.data.copyright}
          date={apodData.data.date}
          explanation={apodData.data.explanation}
          url={apodData.data.url}
          media_type={apodData.data.media_type}
          bookmarkButtonHandler={bookmarkButtonHandler}
        />
      )}
    </main>
  );
};

export default DateViewContainer;
