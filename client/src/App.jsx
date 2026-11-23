import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import BookDetail from './pages/BookDetail';

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Library Catalog</h1>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </div>
  );
}