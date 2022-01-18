import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='Navigation border-2'>
      <ul>
        <li>
          <Link to='dateview'>dateview</Link>
        </li>
        <li>
          <Link to='bookmarks'>bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
