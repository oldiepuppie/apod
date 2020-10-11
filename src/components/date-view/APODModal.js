
import { Box, Button, Layer } from 'grommet';
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
                <Box>{title}</Box>
                <Box>{date}</Box>
                <Box>{explanation}</Box>
                <Box>{closeModal}</Box>
              </Box>
              <Button label="close" onClick={() => setShow(false)} />
            </Layer>
          )};
        </Box>
    </div>
  );
};

export default APODModal;