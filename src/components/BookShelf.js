import React, { useState, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'; 

function BookShelf() {
  const [bookshelf, setBookshelf] = useState([]);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const removeFromBookshelf = (index) => {
    const updatedBookshelf = [...bookshelf];
    updatedBookshelf.splice(index, 1);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="bookshelf-container">
      <h1
        className="bookshelf-heading"
        onMouseEnter={() => setShowQuote(true)}
        onMouseLeave={() => setShowQuote(false)}
      >
        My Bookshelf
        {showQuote && (
          <div className="quote-box">
            "Reading is a journey that takes you places you've never been, without ever leaving home."
          </div>
        )}
      </h1>
      <div className="book-list">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            {book.cover_i ? (
              <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
            ) : (
              <img src={`https://via.placeholder.com/150x200?text=No+Cover`} alt={book.title} />
            )}
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <button className="remove-button" onClick={() => removeFromBookshelf(index)}>
              <AiFillCloseCircle className="close-icon"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookShelf;
