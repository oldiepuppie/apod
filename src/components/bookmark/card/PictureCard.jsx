/* FIXME
  - [ ] 모달 구현 및 적용
  - [ ] 더미데이터로 sections/BookmarkSections에 테스트
  - [ ] 비디오 렌더링 - google api
*/

const PictureCard = ({ src, title, date, explanation, mediaType }) => {
  const dataType = { mediaType }; // TODO control rendering media
  const description = { explanation }; // TODO for a modal

  return (
    <div className='PictureCard bg-gray-300 w-2/5 m-4'>
      <img className='w-max' src={src} alt='astronomy' />
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
};

export default PictureCard;
