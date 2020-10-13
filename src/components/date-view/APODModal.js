import { Box, Layer, Text, Heading, Paragraph } from 'grommet';
import React from 'react';

const APODModal = ({ title, date, explanation, onClose }) => {
  return (
      <div>
          <Layer
            onEsc={onClose}
            onClickOutside={onClose}
          >
            <Box align='center' pad='medium' background='dark-1'>
              <Heading fill alignSelf='start' margin='xsmall' level='3' size='medium'>{title}</Heading>
              <Paragraph alignSelf='start' margin='xsmall' size='medium'>{date}</Paragraph>
              <Paragraph fill margin='xsmall' size='small'>{explanation}</Paragraph>
            </Box>
            <Box background='dark-1' pad='medium' align='center'>
              <Text  onClick={onClose} weight='bold' color='status-critical'>X</Text>
            </Box>
          </Layer>
    </div>
  );
};

export default APODModal;