import { useEffect, useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value.trim());
    }, 350);
    return () => clearTimeout(timer);
  }, [value, onSearch]);

  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Search by title or author..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      aria-label="Search books"
    />
  );
}