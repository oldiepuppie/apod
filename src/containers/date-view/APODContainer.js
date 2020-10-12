import { Box, Image, Layer, Text } from 'grommet';
import React, { useState } from 'react';

const APODContainer = ({ title, date, explanation, url }) => {
  const [ isAPODModalShow, setIsAPODModalShow ] = useState();

  const onAPODModalClose = () => {
    setIsAPODModalShow(false);
  };

  return (
    <div>
      <Box align='center' pad='large' background='dark-2'>
        <Image fit='cover' src={url} onClick={onAPODModalClose(true)}></Image>
      </Box>

      <Box>
        {isAPODModalShow && (
          <Layer
            onEsc={() => onAPODModalClose(false)}
            onClickOutside={() => onAPODModalClose(false)}
          >
            <Box align='center' pad='medium' background='dark-1'>
              <Box pad='small'>{title}</Box>
              <Box pad='small'>{date}</Box>
              <Box pad='small'>{explanation}</Box>
            </Box>
            <Box background='dark-1' pad='medium' align='center'>
              <Text color='status-critical' onClick={() => onAPODModalClose(false)}>X</Text>
            </Box>
          </Layer>
        )}
      </Box>
    </div>
  );
};

export default APODContainer;
