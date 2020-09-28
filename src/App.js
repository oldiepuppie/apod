import React from 'react';
import { Grommet, Header, Heading, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';

function App() {
  return (
    <Grommet theme={grommet}>
      <Header background="dark-1" pad="xsmall" height="xsmall">
        <Heading level='1' size='small'>
          Show yourself
        </Heading>
        <Anchor
          href="#"
          label="sample"
        />
      </Header>
    </Grommet>
  )
}

export default App;
