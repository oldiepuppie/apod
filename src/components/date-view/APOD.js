import { Box, Image } from 'grommet';
import React from 'react';

const APOD = ({ date, explanation, media_type, title, url }) => {
  return (
    <div>
      <Box align='center' pad='large' background='dark-2'>
        <Image fit='cover' src={url}></Image>
      </Box>
    </div>
  );
};

export default APOD;
