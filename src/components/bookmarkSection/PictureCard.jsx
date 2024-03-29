import { useState } from 'react';
import APODMedia from '../common/APODmedia';
import APODModal from '../common/APODModal';
import { ReactComponent as DeleteIcon } from '../../svg/deleteIcon.svg';

const PictureCard = ({ url, title, date, explanation, copyright, media_type, bookmakrDeleteButtonHandler }) => {
  const [isAPODModalShow, setIsAPODModalShow] = useState(false);

  const openAPODModal = () => {
    setIsAPODModalShow(true);
  };

  const closeAPODModal = () => {
    setIsAPODModalShow(false);
  };

  return (
    <li className='PictureCard w-5/6 aspect-[3/3.75] h-auto flex flex-col justify-evenly items-center p-3 pb-0 vp12:w-full vp12:h-full  bg-white text-darkGray'>
      <div id={date} onClick={openAPODModal}>
        <APODMedia
          isInCard
          imgContainerStyle={'flex justify-center'}
          imgStyle={'w-[65vw] h-[65vw] object-fit mb-2 vp12:w-[15vw] vp12:h-[15vw]'}
          media_type={media_type}
          title={title}
          url={url}
        />
        <div className='flex flex-row justify-between mx-2 my-3'>
          <div>
            <h3 className='font-bold text-md mb-2'>{title}</h3>
            <p className='text-sm'>{date}</p>
          </div>
          <button id={date} onClick={bookmakrDeleteButtonHandler}>
            <DeleteIcon id={date} className={'fill-darkGray hover:fill-red w-5 h-auto'} />
          </button>
        </div>
      </div>
      {isAPODModalShow && (
        <APODModal
          media_type={media_type}
          url={url}
          title={title}
          copyright={copyright}
          date={date}
          explanation={explanation}
          onClose={closeAPODModal}
        />
      )}
    </li>
  );
};

export default PictureCard;
