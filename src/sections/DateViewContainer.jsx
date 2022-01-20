import { useState } from 'react';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import getDateTodayEST from '../utilities/getDateTodayEST';
import useGetApod from '../hooks/useGetApod';
import { useRecoilState } from 'recoil';
import { sectionNames } from '../recoil/sectionNames';
import { bookmarkListState } from '../recoil/atoms';
import db from '../db';
import DateInput from '../containers/date-view/DateInput';
import MediaContainer from '../containers/date-view/MediaContainer';
import ErrorMessage from '../components/dateViewSection/ErrorMessage';
import APODModal from '../components/common/APODModal';

const DateViewContainer = () => {
  const { DateView } = sectionNames;
  useSetSectionNameState(DateView);

  const [dateInput, setDateInput] = useState(getDateTodayEST());

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);
  const { data } = apodData;
  const { code, date, title, copyright, explanation, url, media_type } = data;

  const [list, setList] = useRecoilState(bookmarkListState);
  const [isModalOpen, setIsModalOepn] = useState(false);

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

  const openModalHandler = (e) => {
    setIsModalOepn(true);
  };

  const closeModalHandler = () => {
    setIsModalOepn(false);
  };

  return (
    <main className='DateViewContainer flex flex-col justify-center items-center vp12:mt-2'>
      <h2 className='self-start w-full mb-5 font-extrabold text-2xl vp12:w-[60vw] text-darkGray border-b border-lightGray'>
        Date View
      </h2>
      <div className='w-[90%]'>
        <DateInput onClickHandler={onClickHandler} />
        {apodData.isGetApodLoading ? (
          <section className='loadingSpinnerContainer'>
            <div>Loading...</div>
          </section>
        ) : code ? (
          <ErrorMessage code={code} />
        ) : (
          <MediaContainer
            id={date}
            title={title}
            copyright={copyright}
            date={date}
            explanation={explanation}
            url={url}
            media_type={media_type}
            bookmarkButtonHandler={bookmarkButtonHandler}
            openModalHandler={openModalHandler}
          />
        )}
      </div>
      {isModalOpen && (
        <APODModal url={url} title={title} date={date} explanation={explanation} onClose={closeModalHandler} />
      )}
    </main>
  );
};

export default DateViewContainer;
