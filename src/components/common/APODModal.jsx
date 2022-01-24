import { ReactComponent as CloseIcon } from '../../svg/closeIcon.svg';
import APODMedia from './APODmedia';

const APODModal = ({ media_type, url, title, copyright, date, explanation, onClose }) => {
  return (
    <article className='APODModal w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-transparentBlack text-darkGray'>
      <div className='w-5/6 h-5/6 overflow-auto px-5 bg-bgGray border rounded-md vp12:w-1/3 vp12:h-4/6'>
        <button
          className='modalCloseButton flex flex-row-reverse sticky top-0 w-full p-5 text-right font-bold bg-bgGray'
          onClick={onClose}>
          <CloseIcon className='stroke-lightGray hover:stroke-darkGray hover:stroke-2' />
        </button>
        <div className='modalContents top-0 px-2'>
          <h3 className='font-bold text-2xl'>{title}</h3>
          <p className='text-sm pb-3'>{copyright}</p>
          <p className='text-sm pb-3'>{date}</p>
        </div>
        {media_type && (
          <APODMedia
            isInModal
            imgStyle={'px-2 mt-2 vp12:px-8 vp12:py-2'}
            media_type={media_type}
            url={url}
            title={title}
          />
        )}
        <p className='modalDescription m-5'>{explanation}</p>
      </div>
    </article>
  );
};

export default APODModal;
