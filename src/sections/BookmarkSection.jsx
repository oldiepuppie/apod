import { useRecoilState } from 'recoil';
import { bookmarkListState } from '../recoil/atoms';
import { sectionNames } from '../recoil/sectionNames';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import PictureCard from '../components/bookmarkSection/PictureCard';
import db from '../db';

const BookmarkSection = () => {
  const { Bookmark } = sectionNames;
  useSetSectionNameState(Bookmark);

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
    const targetDate = e.target.parentNode.id;

    const isBookmarkedItem = list.some((item) => item.date === targetDate);
    if (isBookmarkedItem) {
      removeFromBookmark(targetDate);
    }
  };

  return (
    <main className='BookmarkSection flex flex-col justify-center items-center'>
      <h2 className='self-start w-full mb-5 font-extrabold text-2xl text-darkGray border-b border-lightGray'>
        Bookmarks
      </h2>
      <ul className='bookmarkList w-[95%] grid justify-items-center justify-center grid-cols-1 auto-rows-fr	gap-5 vp12:grid-cols-colAutoFill'>
        {list.map((item) => {
          const { url, title, date, explanation, media_type } = item;
          return (
            <PictureCard
              key={date}
              url={url}
              title={title}
              date={date}
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
