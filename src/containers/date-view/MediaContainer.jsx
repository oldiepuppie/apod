import { useState } from 'react';
import HeartButton from '../../components/dateViewSection/HeartButton';
import APODMedia from '../../components/common/APODmedia';
import APODModal from '../../components/common/APODModal';

const MediaContainer = ({ title, copyright, date, explanation, url, media_type, bookmarkButtonHandler }) => {
  const [isAPODModalShow, setIsAPODModalShow] = useState(false);

  const closeAPODModal = () => {
    setIsAPODModalShow(false);
  };

  return (
    <figure className='MediaContainer mb-20 text-darkGray' id={date}>
      <div className=''>
        <div className='flex justify-between items-center' onClick={() => setIsAPODModalShow(true)}>
          <div className='w-9/12'>
            <h3 className='font-bold text-xl mb-2'>{title}</h3>
            <p className='text-sm mb-5'>{copyright}</p>
          </div>
          <HeartButton size='2rem' color='grey' bookmarkButtonHandler={bookmarkButtonHandler} />
        </div>
        <APODMedia media_type={media_type} title={title} url={url} />
      </div>
      {isAPODModalShow && <APODModal title={title} date={date} explanation={explanation} onClose={closeAPODModal} />}
    </figure>
  );
};

export default MediaContainer;
