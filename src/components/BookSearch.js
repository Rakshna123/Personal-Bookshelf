import React, {useState} from 'react'

function BookSearch() {

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if(e.target.value.length > 2){
            const res = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            const data = await res.json();
            setBooks(data.docs);
        }
        else {
            setBooks([]);
          }
    };

    const addToBookshelf = (book) => {
        let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        bookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
      };

  return (
    
   <div>
      <input style={{textAlign:"center"}} type="text" value={query} onChange={handleSearch} placeholder="Search for books..." />
      <div className='main'>
        {books.map((book) => (
          <div key={book.key} className='books'>
            <h3 className='title'>{book.title}</h3>
            <p className='name'>{book.author_name?.join(', ')}</p>
            <button className='addBook' onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch