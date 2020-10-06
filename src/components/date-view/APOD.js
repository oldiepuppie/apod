import { Box, Image } from 'grommet';
import React from 'react';
import useGetApod from './hooks/useGetApod';

const APOD = (date) => {
  const test_data = useGetApod(date);

  return (
    <div>
      <Box height='small' width='small'>
        <Image fit='cover' src={test_data.data.url}></Image>
      </Box>
      <Box>{test_data.data.title}</Box>
      <Box>{test_data.data.date}</Box>
      <Box>{test_data.data.explanation}</Box>
      <Box>{test_data.data.media_type}</Box>
    </div>
  );
};

export default APOD;
