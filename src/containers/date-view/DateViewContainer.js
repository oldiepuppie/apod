import { useState } from 'react';
import useGetApod from './../../hooks/useGetApod';
import DateInput from '../../components/DateInput';
import MediaContainer from './MediaContainer';

const DateViewContainer = () => {
  const [dateInput, setDateInput] = useState('');

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);

  return (
    <main className='DateViewContainer'>
      <DateInput onClickHandler={onClickHandler} />
      {dateInput.length === 0 ? (
        <div>
          Please choose date and press <strong>Submit</strong> button.
        </div>
      ) : apodData.isGetApodLoading ? (
        <section className='loadingSpinnerContainer'>
          {/* FIXME 라이브러리 삭제, SVG spinner 컴포넌트 추가 */}
          <div>로딩중</div>
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
