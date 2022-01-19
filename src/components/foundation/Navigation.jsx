import { Link } from 'react-router-dom';

// TODO sectionNames를 사용할 방법은 없을까?

const Navigation = () => {
  return (
    <nav className='Navigation sticky top-0  mb-12 w-screen bg-bgGray border-black'>
      <ul className='flex-col mb-12'>
        <li className='font-bold text-xl'>
          <Link to='dateview'>Date View</Link>
        </li>
        <li className='font-bold text-xl'>
          <Link to='bookmarks'>Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
