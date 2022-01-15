import { useState, useEffect } from 'react';
import useSetSectionNameState from '../../hooks/useSetSectionNameState';
import useGetApod from '../../hooks/useGetApod';
import DateInput from './DateInput';
import MediaContainer from './MediaContainer';
import { useRecoilValue } from 'recoil';
import { dateTodayESTState } from '../../recoil/atoms';

const DateViewContainer = () => {
  const { sessionStorage } = window;
  useSetSectionNameState('dateView');

  const todayDateString = useRecoilValue(dateTodayESTState);
  const [dateInput, setDateInput] = useState(todayDateString);
  const [isError, setIsError] = useState(false);

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);

  // TODO 마지막으로 입력한 날짜를 세션에 저장, 로드
  useEffect(() => {
    const saveDate = (date) => {
      setIsError(false);
      sessionStorage.setItem('lastDateInput', date);
    };
    apodData.data.code === 400 ? setIsError(true) : saveDate(dateInput);
  }, [apodData]);

  return (
    <main className='DateViewContainer'>
      <DateInput onClickHandler={onClickHandler} />
      {dateInput.length === 0 ? (
        <p className='noInputWarning'>
          Please choose date and press <strong>Submit</strong> button.
        </p>
      ) : apodData.isGetApodLoading ? (
        <section className='loadingSpinnerContainer'>
          {/* FIXME 로딩 중 skeleton 또는 spinner 추가 */}
          <div>Loading...</div>
        </section>
      ) : isError ? (
        <div>invalid request - check the date</div>
      ) : (
        <MediaContainer
          title={apodData.data.title}
          date={apodData.data.date}
          explanation={apodData.data.explanation}
          url={apodData.data.url}
          media_type={apodData.data.media_type}
        />
      )}
    </main>
  );
};

export default DateViewContainer;
