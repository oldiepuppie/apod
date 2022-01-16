import { ReactComponent as HeartIcon } from './heart.svg';

const HeartButton = ({ bookmarkButtonHandler, size, color }) => {
  return (
    <button className='HeartButton' type='submit' onClick={bookmarkButtonHandler}>
      <HeartIcon className='heartIconSvg' width={size} height={size} fill={color} />
    </button>
  );
};

export default HeartButton;
