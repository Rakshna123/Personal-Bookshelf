import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const BookCard = ({ book, addToBookshelf }) => {
  const [addedToShelf, setAddedToShelf] = useState(false);

  const handleAddToBookshelf = () => {
    addToBookshelf(book);
    setAddedToShelf(true);
  };

  return (
    <div className="book-card">
      {book.cover_i ? (
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
      ) : (
        <img src={`https://via.placeholder.com/150x200?text=No+Cover`} alt={book.title} />
      )}
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      {!addedToShelf ? (
        <button className="addBook" onClick={handleAddToBookshelf}>
          Add to Bookshelf
        </button>
      ) : (
        <div className="added-text">Added to Bookshelf</div>
      )}
    </div>
  );
};

export default BookCard;
