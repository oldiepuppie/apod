import React from 'react';
import { Box, DateInput } from 'grommet';

const DatePicker = () => {
  const [date, setDate] = useState(new Date().toISOString());
  const onDateInputChange = (event) => {
    const nextDate = event.value;
    setDate(nextDate);
  };
  return (
    <Box align='center' pad='large' background='dark-2'>
      <Box width='medium' background='light-1'>
        <DateInput format='mm/dd/yyyy' value={date} onChange={onDateInputChange} />
      </Box>
    </Box>
  );
};

export default DatePicker;
