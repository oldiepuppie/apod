
import { Box, Button, Layer, Image } from 'grommet';
import React, { useState } from 'react';

const APODModal = ({ title, date, explanation, closeModal }) => {
  const [show, setShow] = useState();

  return (
      <div>
        <Box>
          <Button label="show" onClick={() => setShow(true)} />
          {show && (
            <Layer
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
            >    
              <Box align='center' pad='large' background='dark-1'>
                <Box pad='medium'>{title}</Box>
                <Box pad='medium'>{date}</Box>
                <Box pad='medium'>{explanation}</Box>
                <Box pad='medium'>{closeModal}</Box>
              </Box>
              <Button label="close" onClick={() => setShow(false)} />
            </Layer>
          )}
        </Box>
    </div>
  );
};

export default APODModal;