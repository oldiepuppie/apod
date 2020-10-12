import { Box, Image } from 'grommet';
import React, { useState } from 'react';

const APOD = ({ date, explanation, title, url }) => {
  const [ isAPODModalShow, setIsAPODModalShow ] = useState();

  const onClose = () => {
    setIsAPODModalShow(false);
  };

  return (
    <div>
      <Box align='center' pad='large' background='dark-2'>
        <Image fit='cover' src={url}></Image>
      </Box>
      <Box pad='small'>{date}</Box>
      <Box pad='small'>{title}</Box>
      <Box pad='small'>{explanation}</Box>
    </div>
  );
};

export default APOD;
