import { useState, useEffect } from 'react';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import getDateTodayEST from '../utilities/getDateTodayEST';
import useGetApod from '../hooks/useGetApod';
import { useRecoilState } from 'recoil';
import { bookmarkListState } from '../recoil/atoms';
import DateInput from '../containers/date-view/DateInput';
import MediaContainer from '../containers/date-view/MediaContainer';

/* FIXME
  - [ ] 에러 처리
    - [ ] 에러일때 내용 표시하는 컴포넌트 따로 빼는게 좋아보임. props로 에러 코드 받기.
  - [ ] apodData, data, date 등 depth가 조금 깊고, 이름이 혼동됨. 이해하기 쉽도록 변경 가능해보임
  - [ ] loading, loaded 구분
*/

const DateViewContainer = () => {
  useSetSectionNameState('dateView');

  const todayDateString = getDateTodayEST();
  const [dateInput, setDateInput] = useState(todayDateString);
  const [error, setError] = useState({ isError: false, code: null });

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);
  const { data } = apodData;
  const { code, date } = data;

  useEffect(() => {
    code === 400
      ? setError({ isError: true, code: 400 })
      : code === 404
      ? setError({ isError: true, code: 404 })
      : setError({ isError: false, code: null });
  }, [code]);

  // FIXME 여러번 사용할 가능성이 있는 로직이므로 파일로 분리할 방법 생각해보기
  const [list, setList] = useRecoilState(bookmarkListState);

  const addToBookmart = () => {
    setList((prevList) => [data, ...prevList]);
  };

  const removeFromBookmark = (date) => {
    setList(list.filter((item) => item.date !== date));
  };

  const bookmarkButtonHandler = () => {
    const isBookmarkedItem = list.some((item) => item.date === date);

    if (isBookmarkedItem) {
      setList(list.filter((item) => item.date !== date));
    } else {
      setList([data, ...list]);
    }
  };

  return (
    <main className='DateViewContainer'>
      <DateInput onClickHandler={onClickHandler} />
      {apodData.isGetApodLoading ? (
        <section className='loadingSpinnerContainer'>
          {/* FIXME 로딩 중 skeleton 또는 spinner 추가 */}
          <div>Loading...</div>
        </section>
      ) : error.isError ? (
        <section className='error'>
          {error.code === 404 ? (
            <div>
              Not found.
              <div>
                <p>There is no data for dates listed below.</p>
                <ul>
                  <li>1995-06-17</li>
                  <li>1995-06-18</li>
                  <li>1995-06-19</li>
                </ul>
              </div>
            </div>
          ) : (
            error.code === 400 && <div>Invalid Request - please check the date again.</div>
          )}
        </section>
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
