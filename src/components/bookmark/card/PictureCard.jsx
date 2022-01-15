/* FIXME
  - [ ] 모달 구현 및 적용
  - [ ] 더미데이터로 sections/BookmarkSections에 테스트
  - [ ] 비디오 렌더링 - google api
*/

const PictureCard = ({ src, title, date, explanation, mediaType }) => {
  const mediaType = { mediaType }; // TODO control rendering media
  const explanation = { explanation }; // TODO for a modal

  return (
    <div className='PictureCard'>
      <img className='astronomyPicture w-1/12' src={src} alt='astronomy' />
      <h3 className='mediaTitle'>{title}</h3>
      <p className='publishedAt'>{date}</p>
    </div>
  );
};

export default PictureCard;
