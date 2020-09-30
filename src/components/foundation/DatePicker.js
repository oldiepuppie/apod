import React from 'react';
import { Box, DateInput } from 'grommet';

const DatePicker = () => {
  const [value, setValue] = React.useState('');
  const onChange = (event) => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Box align='center' pad='large' background='dark-2'>
      <Box width='medium' background='light-1'>
        <DateInput format='mm/dd/yyyy' value={value} onChange={onChange} />
      </Box>
    </Box>
  );
};

export default DatePicker;
