import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { bookmarkListState } from '../recoil/atoms';
import sectionNames from '../recoil/sectionNames';
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
    const targetDate = e.target.parentNode.id;

    const isBookmarkedItem = list.some((item) => item.date === targetDate);
    if (isBookmarkedItem) {
      removeFromBookmark(targetDate);
    }
  };

  return (
    <main className='BookmarkSection'>
      <h2 className='font-black text-2xl border-2'>Bookmarks Section</h2>
      <ul className='bookmarkList inline-grid grid-cols-2 gap-4'>
        {list.map((item) => {
          const { url, title, date, explanation, mediaType } = item;
          return (
            <li className='bookmarkedItem' key={date}>
              <PictureCard
                src={url}
                title={title}
                date={date}
                explanation={explanation}
                mediaType={mediaType}
                bookmakrDeleteButtonHandler={bookmakrDeleteButtonHandler}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default BookmarkSection;
