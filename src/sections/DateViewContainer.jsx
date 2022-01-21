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
  const [list, setList] = useRecoilState(bookmarkListState);
  const [isModalOpen, setIsModalOepn] = useState(false);

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);
  const { data } = apodData;
  const { code, date, title, copyright, explanation, url, media_type } = data;

  const getIsBookmarked = (date) => {
    return list.some((item) => item.date === date);
  };
  const [isMarked, setIsMarked] = useState(getIsBookmarked(date));
  /* FIXME
    ## 의도
    DateView에서 북마크 버튼 클릭
      -> 북마크 추가, isMarked를 true로 변경
      -> 북마크 버튼 색상을 빨간색으로 변경, 북마크를 삭제할 때까지 빨간색으로 유지

    ## 문제
    다른 페이지에서 DateView로 돌아오면 isMarked의 상태가 유지되지 않는다

    ## 시도
    - `console.log(isMarked)`, `console.log(getIsBookmarked(date))`
      - false가 여러 개 나오다가 데이터가 렌더링 될 때 즈음 true가 나오면서 동작을 멈춘다
      - 어쨌든 true로 끝이 나니까 true에 맞춰서 빨간색이 보여야 할 것 같은데 그렇지 않다
  */

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

    if (!getIsBookmarked(date)) {
      addToBookmark(data);
      setIsMarked(true);
    } else {
      removeFromBookmark(date);
      setIsMarked(false);
    }
  };

  const openModalHandler = (e) => {
    setIsModalOepn(true);
  };

  const closeModalHandler = () => {
    setIsModalOepn(false);
  };

  return (
    <main className='DateViewContainer flex flex-col justify-center items-center vp12:w-[40vw] vp12:mt-2'>
      <h2 className='self-start w-full mb-10 font-extrabold text-2xl text-darkGray border-b border-lightGray'>
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
            isMarked={isMarked}
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
