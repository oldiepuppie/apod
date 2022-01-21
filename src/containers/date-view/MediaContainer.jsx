import HeartButton from '../../components/dateViewSection/HeartButton';
import APODMedia from '../../components/common/APODmedia';

const MediaContainer = ({
  title,
  copyright,
  date,
  url,
  media_type,
  openModalHandler,
  bookmarkButtonHandler,
  isMarked,
}) => {
  return (
    <figure
      className='MediaContainer flex flex-col items-center mb-20 text-darkGray'
      id={date}
      onClick={openModalHandler}>
      <div className='vp12:w-[27.5vw]'>
        <div className='flex flex-row justify-between items-center mb-5'>
          <div className=''>
            <h3 className='font-bold text-xl mb-2'>{title}</h3>
            <p className='text-sm'>{copyright}</p>
          </div>
          <HeartButton bookmarkButtonHandler={bookmarkButtonHandler} isMarked={isMarked} />
        </div>
        <APODMedia
          media_type={media_type}
          imgStyle={'vp12:flex vp12:flex-row vp12:justify-center vp12:mt-4'}
          title={title}
          url={url}
        />
      </div>
    </figure>
  );
};

export default MediaContainer;
