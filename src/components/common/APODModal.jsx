import APODMedia from './APODmedia';

const APODModal = ({ withMedia, media_type, url, title, date, explanation, onClose }) => {
  return (
    <article className='APODModal border border-red-500'>
      <div>
        {media_type ? <APODMedia media_type={media_type} url={url} title={title} /> : null}
        <div className='modalContents'>
          <h3 className='modalTitle'>{title}</h3>
          <h4 className='modalDate'>{date}</h4>
          <p className='modalDescription'>{explanation}</p>
        </div>
        <div className='modalCloseButtonContainer'>
          <button className='modalCloseButton font-bold' onClick={onClose}>
            close modal
          </button>
        </div>
      </div>
    </article>
  );
};

export default APODModal;
