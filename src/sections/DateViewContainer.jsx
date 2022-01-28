import { useState } from 'react';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import getDateTodayEST from '../utilities/getDateTodayEST';
import useGetApod from '../hooks/useGetApod';
import { useRecoilState } from 'recoil';
import SectionNamesEnum from '../recoil/SectionNamesEnum';
import { bookmarkListState } from '../recoil/atoms';
import db from '../db';
import DateInput from '../containers/date-view/DateInput';
import MediaContainer from '../containers/date-view/MediaContainer';
import ErrorMessage from '../components/dateViewSection/ErrorMessage';
import APODModal from '../components/common/APODModal';

const DateViewContainer = () => {
  useSetSectionNameState(SectionNamesEnum.DateView);

  const [dateInput, setDateInput] = useState(getDateTodayEST());
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListState);
  const [isModalOpen, setIsModalOepn] = useState(false);

  const onDateInputSubmitClick = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);
  const { data } = apodData;
  const { code, date, title, copyright, explanation, url, media_type } = data;
  const isBookmarked = bookmarkList.some((item) => item.date === date);

  const addToBookmark = async (item) => {
    try {
      await db.bookmarkedItems.add(item);
      setBookmarkList([item, ...bookmarkList]);
    } catch (error) {
      alert(error);
    }
  };

  const removeFromBookmark = async (date) => {
    try {
      await db.bookmarkedItems.delete(date);
      setBookmarkList(bookmarkList.filter((item) => item.date !== date));
    } catch (error) {
      alert(error);
    }
  };

  const bookmarkButtonHandler = (e) => {
    e.stopPropagation();

    if (!isBookmarked) {
      addToBookmark(data);
    } else {
      removeFromBookmark(date);
    }
  };

  const openModalHandler = () => {
    setIsModalOepn(true);
  };

  const closeModalHandler = () => {
    setIsModalOepn(false);
  };

  return (
    <main className='DateViewContainer flex flex-col justify-center items-center vp12:w-[40vw] vp12:mt-2'>
      <h2 className='self-start w-full mb-10 font-extrabold text-2xl text-darkGray border-b border-lightGray'>
        By Date
      </h2>
      <div className='w-[90%]'>
        <DateInput onDateInputSubmitClick={onDateInputSubmitClick} />
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
            isBookmarked={isBookmarked}
          />
        )}
      </div>
      {isModalOpen && (
        <APODModal
          url={url}
          title={title}
          date={date}
          copyright={copyright}
          explanation={explanation}
          onClose={closeModalHandler}
        />
      )}
    </main>
  );
};

export default DateViewContainer;
