import { Anchor, Header as GrommetHeader, Heading } from 'grommet';
import React from 'react';

const Header = () => {
  return (
    <GrommetHeader background='dark-2' height='xsmall'>
      <Heading level='2' size='small'>
        <Anchor color='accent-3' href='#' label='Astronomy Picture of Day' />
      </Heading>
    </GrommetHeader>
  );
};

export default Header;
