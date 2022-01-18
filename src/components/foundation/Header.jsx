import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <Link to='/'>
      <h1 className='headerText p-8 text-4xl bg-slate-800 text-slate-200 font-bold vp12:text-5xl'>{children}</h1>
    </Link>
  );
};

export default Header;
