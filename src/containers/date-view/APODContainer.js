import { Box, Image } from 'grommet';
import React, { useState } from 'react';
import APODModal from './../../components/date-view/APODModal';

const APODContainer = ({ title, date, explanation, url, media_type}) => {
  const [ isAPODModalShow, setIsAPODModalShow ] = useState();

  const onAPODModalShow = () => {
    setIsAPODModalShow(false);
  };

  return (
    <div>
      {media_type === 'image' 
        ? ( <Box align='center' pad='large' background='dark-2'>
            <Image 
              fit='cover'
              src={url}
              onClick={()=> setIsAPODModalShow(true)}
              height='35%'
              width='35%'
            ></Image>
            {isAPODModalShow && (
              <APODModal
              title={title}
              date={date}
              explanation={explanation}
              onClose={onAPODModalShow}
              />
            )}
            </Box> )
        : (
            <Box>
              <iframe title={title} src={url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            </Box>
          )
      }
    </div>
  );
};

export default APODContainer;
