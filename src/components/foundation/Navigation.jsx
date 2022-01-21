import { Link } from 'react-router-dom';

// TODO sectionNames를 사용할 방법은 없을까?
/*
  - vp12
    [ ] 헤더 아래에 왼쪽 모서리로 붙여서 고정
*/

const Navigation = () => {
  return (
    <nav className='Navigation mb-12 sticky top-0 vp12:w-[12.5vw] bg-bgGray border-black'>
      <ul className='flex-col py-3 mb-12'>
        <li className='font-bold text-xl vp12:hover:text-green'>
          <Link to='dateview'>Date View</Link>
        </li>
        <li className='font-bold text-xl vp12:hover:text-green'>
          <Link to='bookmarks'>Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
