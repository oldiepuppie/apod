import { useState } from 'react';
import useSetPageState from '../../hooks/useSetPageNameState';
import useGetApod from './../../hooks/useGetApod';
import DateInput from '../../components/DateInput';
import MediaContainer from './MediaContainer';
import { useRecoilValue } from 'recoil';
import { dateTodayESTState } from '../../recoil/atoms';

const DateViewContainer = () => {
  useSetPageState('dateView');

  const todayDateString = useRecoilValue(dateTodayESTState);
  const [dateInput, setDateInput] = useState(todayDateString);

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);

  return (
    <main className='DateViewContainer'>
      <DateInput onClickHandler={onClickHandler} />
      {dateInput.length === 0 ? (
        <p className='noInputWarning'>
          Please choose date and press <strong>Submit</strong> button.
        </p>
      ) : apodData.isGetApodLoading ? (
        <section className='loadingSpinnerContainer'>
          {/* FIXME 라이브러리 삭제, SVG spinner 컴포넌트 추가 */}
          <div>Loading...</div>
        </section>
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
