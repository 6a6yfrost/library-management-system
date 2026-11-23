import { useState } from 'react';

const covers = {
  'Pride and Prejudice': 'https://covers.openlibrary.org/b/id/14348537-L.jpg?default=false',
  'To Kill a Mockingbird': 'https://covers.openlibrary.org/b/id/14351077-L.jpg?default=false',
  'The Great Gatsby': 'https://covers.openlibrary.org/b/id/10590366-L.jpg?default=false',
  'Things Fall Apart': 'https://covers.openlibrary.org/b/id/12816943-L.jpg?default=false',
  'Jane Eyre': 'https://covers.openlibrary.org/b/id/8235363-L.jpg?default=false',
  '1984': 'https://covers.openlibrary.org/b/id/15281890-L.jpg?default=false',
  'The Kite Runner': 'https://covers.openlibrary.org/b/id/14846827-L.jpg?default=false',
  Dune: 'https://covers.openlibrary.org/b/id/11481354-L.jpg?default=false',
  Foundation: 'https://covers.openlibrary.org/b/id/14612610-L.jpg?default=false',
  'The Martian': 'https://covers.openlibrary.org/b/id/11447888-L.jpg?default=false',
  'Ender’s Game': 'https://covers.openlibrary.org/b/id/12996033-L.jpg?default=false',
  'The Left Hand of Darkness': 'https://covers.openlibrary.org/b/id/10618463-L.jpg?default=false',
  'The Hitchhiker’s Guide to the Galaxy': 'https://covers.openlibrary.org/b/id/12986869-L.jpg?default=false',
  Neuromancer: 'https://covers.openlibrary.org/b/id/283860-L.jpg?default=false',
  'The Hound of the Baskervilles': 'https://covers.openlibrary.org/b/id/8063264-L.jpg?default=false',
  'Gone Girl': 'https://covers.openlibrary.org/b/id/8368314-L.jpg?default=false',
  'The Girl with the Dragon Tattoo': 'https://covers.openlibrary.org/b/isbn/9780307269751-L.jpg?default=false',
  'Murder on the Orient Express': 'https://covers.openlibrary.org/b/id/11100465-L.jpg?default=false',
  'And Then There Were None': 'https://covers.openlibrary.org/b/id/11172296-L.jpg?default=false',
  'The Big Sleep': 'https://covers.openlibrary.org/b/id/7268475-L.jpg?default=false',
  'The Maltese Falcon': 'https://covers.openlibrary.org/b/id/998587-L.jpg?default=false',
  Sapiens: 'https://covers.openlibrary.org/b/id/8634250-L.jpg?default=false',
  'A People’s History of the United States': 'https://covers.openlibrary.org/b/id/10592817-L.jpg?default=false',
  'The Guns of August': 'https://covers.openlibrary.org/b/id/6616967-L.jpg?default=false',
  'Long Walk to Freedom': 'https://covers.openlibrary.org/b/id/12702407-L.jpg?default=false',
  'The Diary of a Young Girl': 'https://covers.openlibrary.org/b/id/13526331-L.jpg?default=false',
  'The Wright Brothers': 'https://covers.openlibrary.org/b/id/7317364-L.jpg?default=false',
  'The Silk Roads': 'https://covers.openlibrary.org/b/id/8963642-L.jpg?default=false',
};

export default function BookCover({ book, large = false, loading = 'lazy' }) {
  const [failed, setFailed] = useState(false);
  const coverUrl = book.coverUrl || covers[book.title];

  if (!coverUrl || failed) {
    return (
      <div
        className={`book-cover-placeholder${large ? ' large' : ''}`}
        role="img"
        aria-label={`No cover available for ${book.title}`}
      >
        📖
      </div>
    );
  }

  return (
    <img
      src={coverUrl}
      alt={`Cover of ${book.title}`}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
