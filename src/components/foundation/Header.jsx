import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <Link to='/'>
      <h1 className='Header mb-10 font-black text-4xl'>
        <span className='hover:bg-white'>{children}</span>
      </h1>
    </Link>
  );
};

export default Header;
