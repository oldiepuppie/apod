import { Box, DateInput } from 'grommet';
import React, { useState } from 'react';
import useGetApod from './../../hooks/useGetApod';
import APODContainer from './APODContainer';

const DateViewContainer = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString());
  const onDateInputChange = (event) => {
    const nextIsoDate = event.value;
    setIsoDate(nextIsoDate);
  };

  const validateAvailableDateRange = (isoDate) => {
    const minDate = new Date(1995, 6, 16);
    const maxDate = new Date();
    const targetDate = new Date(isoDate);

    return targetDate.getTime >= minDate.getTime && targetDate.getTime <= maxDate.getTime
      ? true : false
  };

  const getAPODData = (isoDate) => {
    const dateInstance = new Date(isoDate);

    const yyyy = dateInstance.getFullYear();
    const mm = dateInstance.getMonth() + 1 >= 10 ? dateInstance.getMonth() + 1 : `0${dateInstance.getMonth() + 1}`; // The above error occurred
    const dd = dateInstance.getDate() >= 10 ? dateInstance.getDate() - 1 : `0${dateInstance.getDate() - 1}`;

    return `${yyyy}-${mm}-${dd}`;
  };

  const apodData = useGetApod(getAPODData)

  return (
    <div>
      <Box align='center' pad='large'  background='dark-2'>
        <Box width='medium' background='light-1' round='xsmall'>
          <DateInput format='mm/dd/yyyy' value={isoDate} onChange={onDateInputChange} />
        </Box>
      </Box>

      <APODContainer
        title={apodData.data.title}
        date={apodData.data.date}
        explanation={apodData.data.explanation}
        url={apodData.data.url}
        media_type={apodData.data.media_type}
      />
    </div>
  );
};

export default DateViewContainer;
