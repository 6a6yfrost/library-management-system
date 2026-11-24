import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';
import { API_URL } from '../api';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [genreId, setGenreId] = useState('');
  const [sort, setSort] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/genres`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setGenres(Array.isArray(data) ? data : data.genres ?? []))
      .catch(() => setGenres([]));
  }, []);

  return (
    <div className="home-page">
      <div className="filters">
        <SearchBar onSearch={setSearch} />
        <select
          className="genre-filter"
          value={genreId}
          onChange={(e) => setGenreId(e.target.value)}
          aria-label="Filter by genre"
        >
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        <select
          className="sort-control"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort books"
        >
          <option value="">Default order</option>
          <option value="title">Sort by title</option>
          <option value="author">Sort by author</option>
        </select>
      </div>
      <BookGrid genreId={genreId} search={search} sort={sort} />
    </div>
  );
}