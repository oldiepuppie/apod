import React from 'react';
import APOD from './components/date-view/APOD';
import DatePicker from './components/date-view/DatePicker';

const DateView = () => {
  const [date, setDate] = useState(new Date().toISOString());
  const onDateInputChange = (event) => {
    const nextDate = event.value;
    setDate(nextDate);
  };

  const dateForEntry = date.substr(0, 10);
  APOD(dateForEntry);
};

export default DateView;
