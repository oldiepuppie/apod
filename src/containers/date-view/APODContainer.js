import { Box, Image } from 'grommet';
import React, { useState } from 'react';
import APODModal from './../../components/date-view/APODModal';

const APODContainer = ({ title, date, explanation, url, media_type }) => {
  const [isAPODModalShow, setIsAPODModalShow] = useState();

  const closeAPODModal = () => {
    setIsAPODModalShow(false);
  };

  return (
    <div>
      {media_type === 'image' ? (
        <Box align='center' pad='large' background='dark-2'>
          <Image fit='cover' src={url} onClick={() => setIsAPODModalShow(true)} height='35%' width='35%' />
          {isAPODModalShow && (
            <APODModal title={title} date={date} explanation={explanation} onClose={closeAPODModal} />
          )}
        </Box>
      ) : (
        <Box align='center' pad='large' size='cover'>
          <iframe
            title={title}
            src={url}
            frameBorder='0'
            allow='autoplay'
            width='560px'
            height='315px'
            allowFullScreen
          />
        </Box>
      )}
    </div>
  );
};

export default APODContainer;
