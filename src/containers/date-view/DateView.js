import React from 'react';
import APOD from './components/date-view/APOD';
import DatePicker from './components/date-view/DatePicker';

const DateView = () => {
  DatePicker();
  const dateForEntry = date.substr(0, 10);
  APOD(dateForEntry);
};

export default DateView;
