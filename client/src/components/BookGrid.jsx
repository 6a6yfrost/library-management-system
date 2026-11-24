import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { API_URL } from '../api';

export default function BookGrid({ genreId, search, sort }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (genreId) params.set('genreId', genreId);
    if (search) params.set('search', search);

    const url = `${API_URL}/books${params.toString() ? `?${params}` : ''}`;

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load books (${res.status})`);
        return res.json();
      })
      .then((data) => {
        setBooks(Array.isArray(data) ? data : data.data ?? data.books ?? []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [genreId, search]);

  const sortedBooks = (() => {
    if (!sort) return books;
    return [...books].sort((a, b) => {
      const av = (sort === 'title' ? a.title : a.author) ?? '';
      const bv = (sort === 'title' ? b.title : b.author) ?? '';
      return av.localeCompare(bv);
    });
  })();

  if (loading) {
    return (
      <div className="book-grid" aria-busy="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton skeleton-cover" />
            <div className="skeleton skeleton-line" />
            <div className="skeleton skeleton-line short" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-message error" role="alert">
        <p>⚠️ Could not load books: {error}</p>
      </div>
    );
  }

  if (sortedBooks.length === 0) {
    return (
      <div className="state-message empty">
        <p>No books found. Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="book-grid">
      {sortedBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}