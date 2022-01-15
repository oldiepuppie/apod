const APODModal = ({ title, date, explanation, onClose }) => {
  return (
    <article className='APODModal'>
      <div className='modalContents'>
        <h2 className='modalTitle'>{title}</h2>
        <h3 className='modalDate'>{date}</h3>
        <p className='modalDescription'>{explanation}</p>
      </div>
      <div className='modalCloseButtonContainer'>
        <button className='modalCloseButton font-bold' onClick={onClose}>
          close modal
        </button>
      </div>
    </article>
  );
};

export default APODModal;
