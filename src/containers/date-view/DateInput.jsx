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
    <section className='DateInput flex-col mt-5 mb-14 justify-center items-center text-darkGray'>
      <div className='dateInputContainer flex mb-2 justify-center'>
        <input
          className='p-2 font-medium text-lg border border-lightGray rounded text-black'
          type='date'
          value={dateInput}
          min='1995-06-16'
          max={todayDateString}
          onChange={inputHandler}
          onKeyPress={inputKeyPressHandler}
        />
        <button className='ml-4 px-2 font-bold border-2 rounded-xl' type='submit' onClick={buttonHandler}>
          Submit
        </button>
      </div>
      <p className='flex justify-center'>
        <span>The date range follows </span>
        <a href='https://en.wikipedia.org/wiki/Eastern_Time_Zone'>
          <strong className='ml-1'>EST5EDT</strong>
        </a>
        .
      </p>
    </section>
  );
};

export default DateInput;
