import { useState } from 'react';
// FIXME getDateTodayEST() : 전역 상태로 다루기
import getDateTodayEST from '../utilities/getDateTodayEST';

const DateInput = ({ onClickHandler }) => {
  const todayDateString = getDateTodayEST();

  const [dateInput, setDateInput] = useState(todayDateString);

  const inputHandler = (e) => {
    setDateInput(e.target.value);
  };

  const buttonHandler = () => {
    onClickHandler(dateInput);
  };

  return (
    <section className='DateInput' width='medium' background='light-1' round='xsmall'>
      <div className='dateInputContainer'>
        <input type='date' onChange={inputHandler} value={dateInput} min='1995-05-16' max={todayDateString} />
        <button type='submit' onClick={buttonHandler}>
          Submit
        </button>
      </div>
      <p className='dateRangeGuide'>
        The date range follows{' '}
        <a href='https://en.wikipedia.org/wiki/Eastern_Time_Zone'>
          <strong>EST5EDT</strong>
        </a>
        .
      </p>
    </section>
  );
};

export default DateInput;
