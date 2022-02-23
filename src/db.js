import Dexie from 'dexie';

const db = new Dexie('bookmark');
db.version(2).stores({
  bookmarkedItems: '++date, copyright, title, media_type, url, explanation, createdAt',
});

db.version(1).stores({
  bookmarkedItems: '++date, copyright, title, media_type, url, explanation',
});

export default db;
