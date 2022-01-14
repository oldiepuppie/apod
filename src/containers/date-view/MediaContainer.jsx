import { useState } from 'react';
import APODModal from '../../components/date-view/APODModal';

const MediaContainer = ({ title, date, explanation, url, media_type }) => {
  const [isAPODModalShow, setIsAPODModalShow] = useState();

  const closeAPODModal = () => {
    setIsAPODModalShow(false);
  };

  return (
    <figure className='MediaContainer'>
      {media_type === 'image' ? (
        <div className='apodImgContainer'>
          <img src={url} onClick={() => setIsAPODModalShow(true)} alt='astronomy' />
          {isAPODModalShow && (
            <APODModal title={title} date={date} explanation={explanation} onClose={closeAPODModal} />
          )}
        </div>
      ) : (
        <div className='apodVideoContainer'>
          <iframe
            className='apodVideo'
            title={title}
            src={url}
            frameBorder='0'
            allow='autoplay'
            width='560px'
            height='315px'
            allowFullScreen
          />
        </div>
      )}
    </figure>
  );
};

export default MediaContainer;
