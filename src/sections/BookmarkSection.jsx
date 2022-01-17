import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { bookmarkListState } from '../recoil/atoms';
import sectionNames from '../recoil/sectionNames';
import useSetSectionNameState from '../hooks/useSetSectionNameState';
import PictureCard from '../components/bookmark/card/PictureCard';
import db from '../db';

const BookmarkSection = () => {
  const { Bookmark } = sectionNames;
  useSetSectionNameState(Bookmark);

  useEffect(async () => {
    const loadItems = async () => {
      return await db.bookmarkedItems.toArray();
    };

    await loadItems();
  }, []);

  const list = useRecoilValue(bookmarkListState);

  return (
    <main className='BookmarkSection'>
      <h2 className='font-black text-2xl bg-yellow-100'>북마크 섹션</h2>
      <ul className='bookmarkList inline-grid grid-cols-2 gap-4'>
        {list.map((item) => {
          const { url, title, date, explanation, mediaType } = item;
          return (
            <li className='bookmarkedItem' key={date}>
              <PictureCard src={url} title={title} date={date} explanation={explanation} mediaType={mediaType} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default BookmarkSection;
