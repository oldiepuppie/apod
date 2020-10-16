import { Anchor, Box, Grommet, Header, Heading, Main } from 'grommet';
import { grommet } from 'grommet/themes';
import React from 'react';
import styled from 'styled-components';
import DateViewContainer from './containers/date-view/DateViewContainer';
import ReactLoading from 'react-loading';

const MyStyledMain = styled(Main)
  `height: calc( 100% - 96px );
  background-color: #555;
  `;

function App() {
  return (
    <Grommet theme={grommet} full>
      <Header background='dark-1' pad='medium' height='xsmall'>
          <Heading level='1' size='small'>
            <Anchor color='accent-3' href='#' label='Astronomy Picture of Day' />
          </Heading>
        </Header>
      <MyStyledMain>
        <DateViewContainer />
      </MyStyledMain>
    </Grommet>
  );
}

export default App;
