import { useState } from 'react';
import APODMedia from '../common/APODmedia';
import APODModal from '../common/APODModal';

const PictureCard = ({ url, title, date, explanation, media_type, bookmakrDeleteButtonHandler }) => {
  const [isAPODModalShow, setIsAPODModalShow] = useState(false);

  const openAPODModal = () => {
    setIsAPODModalShow(true);
  };

  const closeAPODModal = () => {
    setIsAPODModalShow(false);
  };

  return (
    <div>
      <div className='PictureCard bg-gray-300 w-2/5 m-4' id={date} onClick={openAPODModal}>
        <APODMedia media_type={media_type} title={title} url={url} />
        <h3>{title}</h3>
        <p>{date}</p>
        <button onClick={bookmakrDeleteButtonHandler}>delete</button>
      </div>
      {isAPODModalShow ? (
        <APODModal
          withMedia
          media_type={media_type}
          url={url}
          title={title}
          date={date}
          explanation={explanation}
          onClose={closeAPODModal}
        />
      ) : null}
    </div>
  );
};

export default PictureCard;
