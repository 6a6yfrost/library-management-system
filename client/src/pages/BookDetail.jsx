import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_URL } from '../api';
import BookCover from '../components/BookCover';

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    setBook(null);

    fetch(`${API_URL}/books/${id}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) throw new Error('Book not found');
          throw new Error(`Failed to load book (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="book-detail">
        <div className="detail-layout">
          <div className="skeleton skeleton-cover large" />
          <div className="detail-body">
            <div className="skeleton skeleton-line title" />
            <div className="skeleton skeleton-line short" />
            <div className="skeleton skeleton-line" />
            <div className="skeleton skeleton-line" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-message error" role="alert">
        <p>⚠️ {error}</p>
        <Link to="/" className="back-link">← Back to catalog</Link>
      </div>
    );
  }

  if (!book) return null;

  const genreName = typeof book.genre === 'string' ? book.genre : book.genre?.name;

  return (
    <article className="book-detail">
      <Link to="/" className="back-link">← Back to catalog</Link>
      <div className="detail-layout">
        <div className="detail-cover">
          <BookCover book={book} large loading="eager" />
        </div>
        <div className="detail-body">
          <h1>{book.title}</h1>
          <p className="detail-author">by {book.author}</p>
          {genreName && <span className="book-genre">{genreName}</span>}
          <dl className="detail-meta">
            {book.publishedYear && (<><dt>Published</dt><dd>{book.publishedYear}</dd></>)}
            {book.isbn && (<><dt>ISBN</dt><dd>{book.isbn}</dd></>)}
            {book.pageCount && (<><dt>Pages</dt><dd>{book.pageCount}</dd></>)}
            {book.publisher && (<><dt>Publisher</dt><dd>{book.publisher}</dd></>)}
          </dl>
          {book.description && (
            <div className="detail-description">
              <h2>Description</h2>
              <p>{book.description}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}