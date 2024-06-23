import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import BookSearch from './components/BookSearch';
import BookShelf from './components/BookShelf';
import './Stylesheet/style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <Routes>
        <Route path="/" element={<BookSearch />} />
          <Route path="/bookshelf" element={<BookShelf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
