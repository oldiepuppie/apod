import { Box, Button, Heading, Layer, Paragraph } from 'grommet';
import React from 'react';

const APODModal = ({ title, date, explanation, onClose }) => {
  return (
      <div>
          <Layer
            onEsc={onClose}
            onClickOutside={onClose}
          >
            <Box align='center' pad='medium' background='dark-1'>
              <Heading alignSelf='start' margin='xsmall' level='3'>{title}</Heading>
              <Paragraph alignSelf='start' margin='xsmall'>{date}</Paragraph>
              <Paragraph fill margin='xsmall' size='small'>{explanation}</Paragraph>
            </Box>
            <Box background='dark-1' pad='medium' align='center'>
              <Button label='close 'onClick={onClose} size='large' weight='bold' color='status-critical'/>
            </Box>
          </Layer>
    </div>
  );
};

export default APODModal;