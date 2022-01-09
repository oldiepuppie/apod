import { useState } from 'react';

const DateInput = ({ onClickHandler }) => {
  const getDate = (dateObj) => {
    return dateObj.toISOString().slice(0, 10);
  };
  const todayDateString = getDate(new Date());

  const [dateInput, setDateInput] = useState(todayDateString);

  const inputHandler = (e) => {
    setDateInput(e.target.value);
  };

  const buttonHandler = () => {
    onClickHandler(dateInput);
  };

  return (
    <section className='dateInputContainer' width='medium' background='light-1' round='xsmall'>
      <input type='date' onChange={inputHandler} value={dateInput} min='1995-05-16' max={todayDateString} />
      <button type='submit' onClick={buttonHandler}>
        Submit
      </button>
    </section>
  );
};

export default DateInput;
