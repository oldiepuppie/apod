const APODMedia = ({ media_type, title, url, style }) => {
  return (
    <div className={'APODmedia '.concat(style)}>
      {media_type === 'image' ? (
        <img className='astronomyImage' src={url} alt='astronomy' />
      ) : (
        <iframe
          className='apodVideo'
          title={title}
          src={url}
          frameBorder='0'
          allow='autoplay'
          width='560px'
          height='315px'
          allowFullScreen
        />
      )}
    </div>
  );
};

export default APODMedia;
