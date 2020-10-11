import { Anchor, Box, Grommet, Header, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import React from 'react';
import DateViewContainer from './containers/date-view/DateViewContainer';

function App() {

  return (
    <Grommet theme={grommet} full>
      
      <Header background='dark-1' pad='xsmall' height='xsmall'>
        <Heading level='1' size='small'>
          <Anchor color='accent-3' href='#' label='Astronomy Picture of Day' />
        </Heading>
      </Header>

      <Box align='center' pad='large' background='dark-2'>
        <DateViewContainer />
      </Box>

    </Grommet>
  );
}

export default App;
