import { useRecoilState } from 'recoil';
import { bookmarkListState } from '../recoil/atoms';
import SectionNamesEnum from '../recoil/SectionNamesEnum';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import PictureCard from '../components/bookmarkSection/PictureCard';
import db from '../db';

const BookmarkSection = () => {
  useSetSectionNameState(SectionNamesEnum.Bookmark);

  const [list, setList] = useRecoilState(bookmarkListState);

  const removeFromBookmark = async (date) => {
    try {
      await db.bookmarkedItems.delete(date);
      setList(list.filter((item) => item.date !== date));
    } catch (error) {
      alert(error);
    }
  };

  const bookmakrDeleteButtonHandler = (e) => {
    e.stopPropagation();
    const targetDate = e.target.id || e.target.parentNode.id;
    const isBookmarkedItem = list.some((item) => item.date === targetDate);
    if (isBookmarkedItem) {
      removeFromBookmark(targetDate);
    }
  };

  return (
    <main className='BookmarkSection flex flex-col items-center pb-28 vp12:w-[40vw] vp12:mt-2'>
      <h2 className='self-start w-full mb-10 font-extrabold text-2xl text-darkGray border-b border-b-lightGray'>
        Bookmarks
      </h2>
      <ul className='bookmarkList w-[95%] grid justify-items-center justify-center grid-cols-1 auto-rows-fr	gap-8 vp12:grid-cols-colAutoFill vp12:gap-12'>
        {list.map(({ url, title, date, explanation, media_type, copyright }) => {
          return (
            <PictureCard
              key={date}
              url={url}
              title={title}
              date={date}
              copyright={copyright}
              explanation={explanation}
              media_type={media_type}
              bookmakrDeleteButtonHandler={bookmakrDeleteButtonHandler}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default BookmarkSection;
