
import { Box, Button, Layer, Image, Text } from 'grommet';
import React, { useState } from 'react';

const APODModal = ({ title, date, explanation, url }) => {
  const [show, setShow] = useState();

  return (
      <div>
        <Box>
          <Image fit='cover' src={url} label="show" onClick={() => setShow(true)} ></Image>
          {show && (
            <Layer
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
            >
              <Box align='center' pad='medium' background='dark-1'>
                <Box pad='small'>{title}</Box>
                <Box pad='small'>{date}</Box>
                <Box pad='small'>{explanation}</Box>
              </Box>
              <Box background='dark-1' pad='medium' align='center'>
                <Text color='status-critical' onClick={() => setShow(false)}>X</Text>
              </Box>
            </Layer>
          )}
        </Box>
    </div>
  );
};

export default APODModal;