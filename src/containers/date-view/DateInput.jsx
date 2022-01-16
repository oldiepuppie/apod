import { useState } from 'react';
import getDateTodayEST from '../../utilities/getDateTodayEST';

const DateInput = ({ onClickHandler }) => {
  const todayDateString = getDateTodayEST();
  const [dateInput, setDateInput] = useState(todayDateString);

  const inputHandler = (e) => {
    setDateInput(e.target.value);
  };

  const buttonHandler = () => {
    onClickHandler(dateInput);
  };

  const inputKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      buttonHandler();
    }
  };

  return (
    <section className='DateInput' width='medium' background='light-1' round='xsmall'>
      <div className='dateInputContainer'>
        <input
          type='date'
          value={dateInput}
          min='1995-06-16'
          max={todayDateString}
          onChange={inputHandler}
          onKeyPress={inputKeyPressHandler}
        />
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
