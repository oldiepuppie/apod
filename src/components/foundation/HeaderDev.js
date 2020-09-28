import React from 'react';
import { Grommet, Header, Heading, Anchor } from 'grommet';

function HeaderDev() {
  return (
      <Header background="dark-2" pad="xsmall" height="xsmall">
        <Heading level='1' size='small'>
          <Anchor
            color='accent-3'
            href="#"
            label="Astronomy Picture of Day"
          />
        </Heading>
      </Header>
  )
}

export default HeaderDev