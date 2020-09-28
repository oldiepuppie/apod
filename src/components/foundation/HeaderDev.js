import React from 'react';
import { Header, Heading, Anchor } from 'grommet';

function HeaderDev() {
  return (
    <Header background="dark-2" pad="xsmall" height="xsmall">
      <Heading level='1' size='small'>
        <Anchor
        href="#"
        label="Astronomy Picture of Day"
        />
      </Heading>
    </Header>
  )
}

export default Header