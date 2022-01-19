import { Link } from 'react-router-dom';

const Navigation = () => {
  // TODO sectionNames.map
  return (
    <nav className='Navigation border border-black'>
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
