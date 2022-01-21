import { ReactComponent as HeartIcon } from '../../svg/heart.svg';

const HeartButton = ({ bookmarkButtonHandler, isMarked }) => {
  return (
    <button className='HeartButton' type='submit' onClick={bookmarkButtonHandler}>
      <HeartIcon className={`heartIconSvg w-8 h-8 ${isMarked ? 'fill-red' : 'fill-lightGray'}`} />
    </button>
  );
};

export default HeartButton;
