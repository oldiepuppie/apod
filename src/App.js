import { Anchor, Box, DateInput, Grommet, Header, Heading, Main } from 'grommet';
import { grommet } from 'grommet/themes';
import React from 'react';

function App() {
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

      <Main full background='dark-2' pad='small'></Main>
    </Grommet>
  );
}

export default App;
