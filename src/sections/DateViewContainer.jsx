import { useState } from 'react';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import getDateTodayEST from '../utilities/getDateTodayEST';
import useGetApod from '../hooks/useGetApod';
import { useRecoilState } from 'recoil';
import { bookmarkListState } from '../recoil/atoms';
import db from '../db';
import DateInput from '../containers/date-view/DateInput';
import MediaContainer from '../containers/date-view/MediaContainer';
import ErrorMessage from '../components/date-view/ErrorMessage';

/* FIXME
  - [x] 에러 처리
    - [x] 에러일때 내용 표시하는 컴포넌트 따로 빼는게 좋아보임. props로 에러 코드 받기.
  - [ ] apodData, data, date 등 depth가 조금 깊고, 이름이 혼동됨. 이해하기 쉽도록 변경 가능해보임
  - [ ] loading, loaded 구분
*/

const DateViewContainer = () => {
  useSetSectionNameState('dateView');

  const todayDateString = getDateTodayEST();
  const [dateInput, setDateInput] = useState(todayDateString);

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);
  const { data } = apodData;
  const { code, date } = data;

  const [list, setList] = useRecoilState(bookmarkListState);

  // TODO indexedDB 작업중
  const addToBookmark = async () => {
    try {
      await db.data.add(data);
      setList([data, ...list]);
    } catch (error) {
      alert(error);
    }
  };

  const removeFromBookmark = async (date) => {
    try {
      await db.data.delete(date);
      setList(list.filter((item) => item.date !== date));
    } catch (error) {
      alert(error);
    }
  };

  const bookmarkButtonHandler = () => {
    const isBookmarkedItem = list.some((item) => item.date === date);

    if (!isBookmarkedItem) {
      addToBookmark();
    } else {
      removeFromBookmark(date);
    }
  };

  return (
    <main className='DateViewContainer'>
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
