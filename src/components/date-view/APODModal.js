import { Box, Layer, Text } from 'grommet';
import React from 'react';

const APODModal = ({ title, date, explanation, onClose }) => {
  return (
      <div>
        <Box>
          {show && (
            <Layer
              onEsc={() => onClose(false)}
              onClickOutside={() => onClose(false)}
            >
              <Box align='center' pad='medium' background='dark-1'>
                <Box pad='small'>{title}</Box>
                <Box pad='small'>{date}</Box>
                <Box pad='small'>{explanation}</Box>
              </Box>
              <Box background='dark-1' pad='medium' align='center'>
                <Text color='status-critical' onClick={() => onClose(false)}>X</Text>
              </Box>
            </Layer>
          )}
        </Box>
    </div>
  );
};

export default APODModal;