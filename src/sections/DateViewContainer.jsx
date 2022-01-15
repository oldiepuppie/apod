import { useState, useEffect } from 'react';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import useGetApod from '../hooks/useGetApod';
import DateInput from '../containers/date-view/DateInput';
import MediaContainer from '../containers/date-view/MediaContainer';
import { useRecoilValue } from 'recoil';
import { dateTodayESTState } from '../recoil/atoms';

const DateViewContainer = () => {
  useSetSectionNameState('dateView');

  const todayDateString = useRecoilValue(dateTodayESTState);
  const [dateInput, setDateInput] = useState(todayDateString);
  const [error, setError] = useState({ isError: false, code: null });

  const onClickHandler = (date) => {
    setDateInput(date);
  };

  const apodData = useGetApod(dateInput);

  const { code } = apodData.data;
  useEffect(() => {
    code === 400
      ? setError({ isError: true, code: 400 })
      : code === 404
      ? setError({ isError: true, code: 404 })
      : setError({ isError: false, code: null });
  }, [code]);

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

// (

// )
