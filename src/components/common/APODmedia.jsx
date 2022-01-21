const APODMedia = ({
  media_type,
  title,
  url,
  imgStyle,
  imgContainerStyle,
  videoWidth,
  videoHeight,
  isInModal,
  isInCard,
}) => {
  return (
    <div
      className={`APODmedia${imgContainerStyle ? ' ' + imgContainerStyle : ''}${isInModal && ' flex justify-center'}`}>
      {media_type === 'image' ? (
        <img className={imgStyle} src={url} alt='astronomy' />
      ) : (
        <iframe
          className={`${isInCard ? 'aspect-square ' : 'aspect-video '}${isInModal ? ' w-5/6' : ' w-[100%]'} h-auto`}
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
