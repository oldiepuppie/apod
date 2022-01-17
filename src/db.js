import Dexie from 'dexie';

const db = new Dexie('bookmarkList');
db.version(1).stores({
  data: '++date, copyright, title, media_type, url, explanation',
});

export default db;
