import { useState } from 'react';
import HeartButton from '../../components/common/HeartButton/HeartButton';
import APODModal from '../../components/date-view/modal/APODModal';

// TODO 마지막으로 입력한 날짜를 세션에 저장, 로드

const MediaContainer = ({ title, date, explanation, url, media_type, bookmarkButtonHandler }) => {
  const [isAPODModalShow, setIsAPODModalShow] = useState();

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
          {media_type === 'image' ? (
            <img className='astronomyImage' src={url} alt='astronomy' />
          ) : (
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
          )}
        </div>
      </div>
      {isAPODModalShow && <APODModal title={title} date={date} explanation={explanation} onClose={closeAPODModal} />}
    </figure>
  );
};

export default MediaContainer;
