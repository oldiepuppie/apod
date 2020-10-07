import { Box, Image } from 'grommet';
import React from 'react';

const APOD = ({ date, explanation, media_type, title, url }) => {
  return (
    <div>
      <Box height='small' width='small'>
        <Image fit='cover' src={data.props.url}></Image>
      </Box>
      <Box>{data.props.title}</Box>
      <Box>{data.props.date}</Box>
      <Box>{data.props.explanation}</Box>
      <Box>{data.props.media_type}</Box>
    </div>
  );
};

export default APOD;