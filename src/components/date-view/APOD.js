import { Box, Image } from 'grommet';
import React from 'react';

const APOD = ({ date, explanation, media_type, title, url }) => {
  return (
    <div>
      <Box height='small' width='small'>
        <Image fit='cover' src={url}></Image>
      </Box>
      <Box>{title}</Box>
      <Box>{date}</Box>
      <Box>{explanation}</Box>
      <Box>{media_type}</Box>
    </div>
  );
};

export default APOD;
