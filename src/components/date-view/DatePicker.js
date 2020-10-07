import React from 'react';
import { Box, DateInput } from 'grommet';

const DatePicker = () => {
  const [isoDate, setIsoDate] = useState(new Date().toISOString());
  const onDateInputChange = (event) => {
    const nextDate = event.value;
    setIsoDate(nextDate);
  };

  return (
    <Box align='center' pad='large' background='dark-2'>
      <Box width='medium' background='light-1'>
        <DateInput format='mm/dd/yyyy' value={isoDate} onChange={onDateInputChange} />
      </Box>
    </Box>
  );
};

export default DatePicker;
