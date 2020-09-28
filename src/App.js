import React from 'react';
import { Anchor, Box, Grommet, Header, Heading, ResponsiveContext } from 'grommet';
import { grommet } from 'grommet/themes';

function App() {
  const customBreakpoints = {
    global: {
      breakpoints: {
        xsmall: {
          value: 375,
        },
        small: {
          value: 568,
          edgeSize: {
            none: '0px',
            small: '6px',
            medium: '12px',
            large: '24px',
          },
        },
        medium: {
          value: 768,
          edgeSize: {
            none: '0px',
            small: '12px',
            medium: '24px',
            large: '48px',
          },
        },
        large: {
          value: 1024,
          edgeSize: {
            none: '0px',
            small: '12px',
            medium: '24px',
            large: '48px',
          },
        },
        xlarge: {
          value: 1366,
          edgeSize: {
            none: '0px',
            small: '12px',
            medium: '24px',
            large: '48px',
          },
        },
      },
    },
  };

  return (
    <Grommet theme={grommet}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill background="brand">
            <Heading>{`Hi, I'm ${size}, resize me!`}</Heading>
          </Box>
        )}
      </ResponsiveContext.Consumer>
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
