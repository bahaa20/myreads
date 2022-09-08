import "./App.css";
import {useEffect, useState} from "react";
import BookShelf from "./components/BookShelf";
import {getAll} from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const getAllBooks= async ()=>{
    setBooks(await getAll());
    // console.log(await getAll());
  }
  useEffect (() => {
    getAllBooks();
  },[])

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf shelfName={"Currently Reading"} books={books.filter((book)=>book.shelf==="currentlyReading")}/>
              <BookShelf shelfName={"want to Read"} books={books.filter((book)=>book.shelf==="wantToRead")}/>
              <BookShelf shelfName={"Read"} books={books.filter((book)=>book.shelf==="read")}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
