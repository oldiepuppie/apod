import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { sectionNameState } from '../../recoil/atoms';
import SectionNamesEnum from '../../recoil/SectionNamesEnum';

const Navigation = () => {
  const currentSection = useRecoilValue(sectionNameState);

  return (
    <nav className='Navigation mb-12 bg-bgGray border-black'>
      <ul className='flex-col py-3 mb-12'>
        <li className={`font-bold text-xl`}>
          <Link to='dateview'>
            <span className={`hover:text-green ${currentSection === SectionNamesEnum.DateView && 'text-green'}`}>
              Date View
            </span>
          </Link>
        </li>
        <li className={`font-bold text-xl`}>
          <Link to='bookmarks'>
            <span className={`hover:text-green ${currentSection === SectionNamesEnum.Bookmark && 'text-green'}`}>
              Bookmarks
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
