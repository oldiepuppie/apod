/* FIXME
  - [ ] 모달 구현 및 적용
  - [ ] 비디오 렌더링 - google api
*/

const PictureCard = ({ src, title, date, explanation, mediaType, bookmakrDeleteButtonHandler }) => {
  const dataType = { mediaType }; // TODO control rendering media
  const description = { explanation }; // TODO for a modal

  return (
    <div className='PictureCard bg-gray-300 w-2/5 m-4' id={date}>
      <img className='w-max' src={src} alt='astronomy' />
      <h3>{title}</h3>
      <p>{date}</p>
      <button onClick={bookmakrDeleteButtonHandler}>delete</button>
    </div>
  );
};

export default PictureCard;
