const APODMedia = ({ media_type, title, url, imgStyle, imgContainerStyle, videoWidth, videoHeight }) => {
  return (
    <div className={`APODmedia ${imgContainerStyle ? imgContainerStyle : ''}`}>
      {media_type === 'image' ? (
        <img className={imgStyle} src={url} alt='astronomy' />
      ) : (
        <iframe
          className='apodVideo'
          title={title}
          src={url}
          frameBorder='0'
          allow='autoplay'
          width={videoWidth ? videoWidth : '560px'}
          height={videoHeight ? videoHeight : '315px'}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default APODMedia;
