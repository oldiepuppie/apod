import { Anchor, Box, DateInput, Grommet, Header, Heading, Main, Image } from 'grommet';
import { grommet } from 'grommet/themes';
import useGetApod from './hooks/useGetApod';
import React from 'react';

function App() {
  console.log(useGetApod(2019 - 12 - 31));
  const [value, setValue] = React.useState('');
  const onChange = (event) => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };

  return (
    <Grommet theme={grommet} full>
      <Header background='dark-1' pad='xsmall' height='xsmall'>
        <Heading level='1' size='small'>
          <Anchor color='accent-3' href='#' label='Astronomy Picture of Day' />
        </Heading>
      </Header>
      <Box align='center' pad='large' background='dark-2'>
        <Box width='medium' background='light-1'>
          <DateInput format='mm/dd/yyyy' value={value} onChange={onChange} />
        </Box>
      </Box>

      <Main full background='dark-2' pad='small'>
        <Box height='small' width='small'>
          <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
        </Box>
      </Main>
    </Grommet>
  );
}

export default App;
