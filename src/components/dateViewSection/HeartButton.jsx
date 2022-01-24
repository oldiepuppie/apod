import { ReactComponent as HeartIcon } from '../../svg/heart.svg';

const HeartButton = ({ bookmarkButtonHandler, isBookmarked }) => {
  return (
    <button className='HeartButton' type='submit' onClick={bookmarkButtonHandler}>
      <HeartIcon className={`heartIconSvg w-8 h-8 ${isBookmarked ? 'fill-red' : 'fill-lightGray'}`} />
    </button>
  );
};

export default HeartButton;
