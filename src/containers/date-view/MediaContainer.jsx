import HeartButton from '../../components/dateViewSection/HeartButton';
import APODMedia from '../../components/common/APODmedia';

const MediaContainer = ({ title, copyright, date, url, media_type, openModalHandler, bookmarkButtonHandler }) => {
  return (
    <figure
      className='MediaContainer flex flex-col items-center mb-20 text-darkGray'
      id={date}
      onClick={openModalHandler}>
      <div className=''>
        <div className='flex justify-between items-center'>
          <div className='w-9/12'>
            <h3 className='font-bold text-xl mb-2'>{title}</h3>
            <p className='text-sm mb-5'>{copyright}</p>
          </div>
          <HeartButton size='2rem' color='grey' bookmarkButtonHandler={bookmarkButtonHandler} />
        </div>
        <APODMedia
          media_type={media_type}
          imgStyle={'vp12:flex vp12:flex-row vp12:justify-center vp12:p-16'}
          title={title}
          url={url}
        />
      </div>
    </figure>
  );
};

export default MediaContainer;
