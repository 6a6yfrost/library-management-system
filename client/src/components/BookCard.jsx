import { Link } from 'react-router-dom';
import BookCover from './BookCover';

export default function BookCard({ book }) {
  const { id, title, author, genre } = book;
  const genreName = typeof genre === 'string' ? genre : genre?.name;

  return (
    <Link to={`/books/${id}`} className="book-card">
      <div className="book-cover">
        <BookCover book={book} />
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        {genreName && <span className="book-genre">{genreName}</span>}
      </div>
    </Link>
  );
}