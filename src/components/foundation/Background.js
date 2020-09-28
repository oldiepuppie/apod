import React from 'react';
import { Box, Grommet, Heading, ResponsiveContext } from 'grommet';

function Background() {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill background="dark-2">
          <Heading>{`Hi, I'm ${size}, resize me!`}</Heading>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Background