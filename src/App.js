import { Anchor, Box, Grommet, Header, Heading, Main} from 'grommet';
import { grommet } from 'grommet/themes';
import React from 'react';
import DateViewContainer from './containers/date-view/DateViewContainer';
import styled from 'styled-components';

function App() {
  const MyStyledMain = styled(Main)
  `height: calc(100%+96px)`;

  return (
    <Grommet theme={grommet} full>
      <MyStyledMain>
        <Header background='dark-1' pad='medium' height='xsmall'>
          <Heading level='1' size='small'>
            <Anchor color='accent-3' href='#' label='Astronomy Picture of Day' />
          </Heading>
        </Header>
        <DateViewContainer />
      </MyStyledMain>
    </Grommet>
  );
}

export default App;
