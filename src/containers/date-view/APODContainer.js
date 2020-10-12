import { Box, Image, Layer, Text } from 'grommet';
import React, { useState } from 'react';

const APODContainer = ({ title, date, explanation, url }) => {
  const [ isAPODModalShow, setIsAPODModalShow ] = useState();
  setIsAPODModalShow(false);

  // Identifier 'onAPODModalClose' has already been declared (4:56)

  return (
    <div>
      mediaType === 'image'
      ? (
        <Box align='center' pad='large' background='dark-2'>
          <Image fit='cover' src={url} onClick={setIsAPODModalShow(true)}></Image>
          {isAPODModalShow && (
            <Layer
              onEsc={() => setIsAPODModalShow(false)}
              onClickOutside={() => setIsAPODModalShow(false)}
            >
              <Box align='center' pad='medium' background='dark-1'>
                <Box pad='small'>{title}</Box>
                <Box pad='small'>{date}</Box>
                <Box pad='small'>{explanation}</Box>
              </Box>
                <Text color='status-critical' onClick={() => setIsAPODModalShow(false)}>X</Text>
            </Layer>
          )}
        </Box>
        )
      : (
        <iframe title={title} src={url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
      )
    </div>
  );
};

export default APODContainer;
