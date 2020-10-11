import { Anchor, Box, DateInput, Grommet, Header, Heading, Main, Image } from 'grommet';
import { grommet } from 'grommet/themes';
import React, { useState } from 'react';
import useGetApod from './hooks/useGetApod'; // APOD

function App() {
  const [date, setDate] = useState(new Date().toISOString());
  const onDateInputChange = (event) => {
    const nextDate = event.value;
    console.log('onDateInputChange', nextDate);
    setDate(nextDate);
  };
  console.log(date);

  const dateInstance = new Date(date);
  const dateForApod = `${dateInstance.getFullYear()}-${dateInstance.getMonth() + 1}-${dateInstance.getDate()}`;

  // APOD tester start
  const test_data = useGetApod(dateForApod);
  console.log(test_data);
  // APOD tester end

  return (
    <Grommet theme={grommet} full>
      <Header background='dark-1' pad='xsmall' height='xsmall'>
        <Heading level='1' size='small'>
          <Anchor color='accent-3' href='#' label='Astronomy Picture of Day' />
        </Heading>
      </Header>

      <Box align='center' pad='large' background='dark-2'>
        <Box width='medium' background='light-1'>
          <DateInput format='mm/dd/yyyy' value={date} onChange={onDateInputChange} />
        </Box>
      </Box>

      {/* APOD RETURN tester start */}
      <Main full background='dark-2' pad='small'>
        <Box height='small' width='small'>
          <Image fit='cover' src={test_data.data.url}></Image>
        </Box>
      </Main>
      {/* APOD RETURN tester end */}
    </Grommet>
  );
}

export default App;
