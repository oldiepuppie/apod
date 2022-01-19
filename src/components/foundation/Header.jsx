import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <Link to='/'>
      <h1 className='Header mb-14 font-black text-4xl'>{children}</h1>
    </Link>
  );
};

export default Header;
