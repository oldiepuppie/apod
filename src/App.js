import React from 'react';
import { Grommet, Header, Heading, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';

function App() {
  return (
    <Grommet theme={grommet}>
      <Header background="dark-2" pad="xsmall" height="xsmall">
        <Heading level='1' size='small'>
          <Anchor
            href="#"
            label="Astronomy Picture of Day"
          />
        </Heading>
      </Header>
    </Grommet>
  )
}

export default App;
