import APODMedia from './APODmedia';

// TODO media 가운데 정렬 코드 수정

const APODModal = ({ media_type, url, title, date, explanation, onClose }) => {
  return (
    <article className='APODModal w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-transparentBlack text-darkGray'>
      <div className='w-5/6 h-5/6 overflow-auto px-5 bg-bgGray border rounded-md'>
        <div className='modalContents sticky top-0 p-2 bg-bgGray'>
          <h3 className='font-bold text-xl'>{title}</h3>
          <h4 className='modalDate text-sm pb-3'>{date}</h4>
        </div>
        {media_type && <APODMedia style={'px-10'} media_type={media_type} url={url} title={title} />}
        <p className='modalDescription m-5'>{explanation}</p>
        <button className='modalCloseButton p-2 pb-4 font-bold' onClick={onClose}>
          close modal
        </button>
      </div>
    </article>
  );
};

export default APODModal;
