import React from 'react';
import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { grommet } from 'grommet/themes';

function Header() {
  return(
    <Grommet theme={grommet}>
      <Header background="dark-1" pad="large" height="small">
        <Anchor
          href="https://tools.grommet.io/"
          label="sample"
        />
      </Header>
    </Grommet>
  );
}


export default Header