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
  'The Time Machine': 'https://covers.openlibrary.org/b/id/9009316-L.jpg?default=false',
  'The Secret Garden': 'https://covers.openlibrary.org/b/id/12622062-L.jpg?default=false',
  'The War of the Worlds': 'https://covers.openlibrary.org/b/id/36314-L.jpg?default=false',
  'Twenty Thousand Leagues Under the Sea': 'https://covers.openlibrary.org/b/id/10817535-L.jpg?default=false',
  'The Moonstone': 'https://covers.openlibrary.org/b/id/8237041-L.jpg?default=false',
  'The Sign of the Four': 'https://covers.openlibrary.org/b/id/9247987-L.jpg?default=false',
  'The History of the Peloponnesian War': 'https://covers.openlibrary.org/b/id/4909161-L.jpg?default=false',
  'The Decline and Fall of the Roman Empire': 'https://covers.openlibrary.org/b/id/5978577-L.jpg?default=false',
  'The Catcher in the Rye': 'https://covers.openlibrary.org/b/id/9273490-L.jpg?default=false',
  'The Book Thief': 'https://covers.openlibrary.org/b/id/15267110-L.jpg?default=false',
  'The Alchemist': 'https://covers.openlibrary.org/b/id/11556106-L.jpg?default=false',
  'One Hundred Years of Solitude': 'https://covers.openlibrary.org/b/id/6807555-L.jpg?default=false',
  "The Handmaid's Tale": 'https://covers.openlibrary.org/b/id/8231851-L.jpg?default=false',
  'Little Women': 'https://covers.openlibrary.org/b/id/8775559-L.jpg?default=false',
  'Wuthering Heights': 'https://covers.openlibrary.org/b/id/12818862-L.jpg?default=false',
  'The Color Purple': 'https://covers.openlibrary.org/b/id/8564628-L.jpg?default=false',
  'The Old Man and the Sea': 'https://covers.openlibrary.org/b/id/463307-L.jpg?default=false',
  'The Grapes of Wrath': 'https://covers.openlibrary.org/b/id/12715902-L.jpg?default=false',
  'Fahrenheit 451': 'https://covers.openlibrary.org/b/id/12993656-L.jpg?default=false',
  'Brave New World': 'https://covers.openlibrary.org/b/id/8231823-L.jpg?default=false',
  'The Three-Body Problem': 'https://covers.openlibrary.org/b/id/7893958-L.jpg?default=false',
  'Snow Crash': 'https://covers.openlibrary.org/b/id/392508-L.jpg?default=false',
  'Hyperion': 'https://covers.openlibrary.org/b/id/380332-L.jpg?default=false',
  'The Forever War': 'https://covers.openlibrary.org/b/id/10693768-L.jpg?default=false',
  'The Dispossessed': 'https://covers.openlibrary.org/b/id/6979680-L.jpg?default=false',
  'Do Androids Dream of Electric Sheep?': 'https://covers.openlibrary.org/b/id/207515-L.jpg?default=false',
  'The Long Way to a Small, Angry Planet': 'https://covers.openlibrary.org/b/id/8902659-L.jpg?default=false',
  'Ancillary Justice': 'https://covers.openlibrary.org/b/id/7355949-L.jpg?default=false',
  'The Adventures of Sherlock Holmes': 'https://covers.openlibrary.org/b/id/6717853-L.jpg?default=false',
  'The Murder of Roger Ackroyd': 'https://covers.openlibrary.org/b/id/13151356-L.jpg?default=false',
  'The Woman in White': 'https://covers.openlibrary.org/b/id/4684227-L.jpg?default=false',
  'In the Woods': 'https://covers.openlibrary.org/b/id/1474730-L.jpg?default=false',
  "The Cuckoo's Calling": 'https://covers.openlibrary.org/b/id/7261207-L.jpg?default=false',
  'The Thursday Murder Club': 'https://covers.openlibrary.org/b/id/10201431-L.jpg?default=false',
  "The No. 1 Ladies' Detective Agency": 'https://covers.openlibrary.org/b/id/213299-L.jpg?default=false',
  'The Da Vinci Code': 'https://covers.openlibrary.org/b/id/9255229-L.jpg?default=false',
  'The Daughter of Time': 'https://covers.openlibrary.org/b/id/6485299-L.jpg?default=false',
  'The Name of the Rose': 'https://covers.openlibrary.org/b/id/15023290-L.jpg?default=false',
  'The Histories': 'https://covers.openlibrary.org/b/id/6909537-L.jpg?default=false',
  'The Prince': 'https://covers.openlibrary.org/b/id/12726168-L.jpg?default=false',
  'The Art of War': 'https://covers.openlibrary.org/b/id/4849549-L.jpg?default=false',
  'Team of Rivals': 'https://covers.openlibrary.org/b/id/9286949-L.jpg?default=false',
  'Guns, Germs, and Steel': 'https://covers.openlibrary.org/b/id/7884018-L.jpg?default=false',
  'The Warmth of Other Suns': 'https://covers.openlibrary.org/b/id/10129368-L.jpg?default=false',
  'The Making of the Atomic Bomb': 'https://covers.openlibrary.org/b/id/6919988-L.jpg?default=false',
  '1491': 'https://covers.openlibrary.org/b/id/803118-L.jpg?default=false',
  'The Roman Revolution': 'https://covers.openlibrary.org/b/id/9288680-L.jpg?default=false',
  'SPQR': 'https://covers.openlibrary.org/b/id/7418788-L.jpg?default=false',
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
