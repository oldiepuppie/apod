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

  const dateInstance = new Date(isoDate);

  const yyyy = dateInstance.getFullYear();
  const mm = dateInstance.getMonth() + 1 >= 10 ? dateInstance.getMonth() + 1 : `0${dateInstance.getMonth() + 1}`; // The above error occurred
  const dd = dateInstance.getDate() >= 10 ? dateInstance.getDate() - 1 : `0${dateInstance.getDate() - 1}`;

  const dateForApod = `${yyyy}-${mm}-${dd}`;

  const apodData = useGetApod(dateForApod);

  return (
    <div>
      <Box align='center' pad='large' background='dark-2'>
        <Box width='medium' background='light-1'>
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
