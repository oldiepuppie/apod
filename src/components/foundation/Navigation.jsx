import { Link } from 'react-router-dom';

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
