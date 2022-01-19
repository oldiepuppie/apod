import { useState } from 'react';
import HeartButton from '../../components/dateViewSection/HeartButton';
import APODMedia from '../../components/common/APODmedia';
import APODModal from '../../components/common/APODModal';

const MediaContainer = ({ title, date, explanation, url, media_type, bookmarkButtonHandler }) => {
  const [isAPODModalShow, setIsAPODModalShow] = useState(false);

  const closeAPODModal = () => {
    setIsAPODModalShow(false);
  };

  return (
    <figure className='MediaContainer' id={date}>
      <div className='apodMedia'>
        <div className='mediaTitleDate' onClick={() => setIsAPODModalShow(true)}>
          <h3 className='title'>{title}</h3>
          <p className='date'>{date}</p>
          <HeartButton size='1.5rem' color='grey' bookmarkButtonHandler={bookmarkButtonHandler} />
          <APODMedia media_type={media_type} title={title} url={url} />
        </div>
      </div>
      {isAPODModalShow && <APODModal title={title} date={date} explanation={explanation} onClose={closeAPODModal} />}
    </figure>
  );
};

export default MediaContainer;
