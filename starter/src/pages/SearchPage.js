import {Link} from "react-router-dom";
import Book from "../components/Book";
import {search} from "../BooksAPI";
import {useEffect, useState} from "react";
import Loading from "../components/Loading";

const SearchPage = ({myBooks, setBookShelf}) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const searchForBook = async (query) => {
    setLoading(true)
    if (query) {
      const res = await search(query, 20);
      if (res && !res.error) {
        const searchBookResult = res.map((newBook) => {
          let book = myBooks.find((book) => book.id === newBook.id);
          if (book) {
            // return book with its current shelf if it exists on shelf
            return newBook = {...newBook, shelf: book.shelf};
          } else {
            return newBook;
          }
        })
        setSearchBooks(searchBookResult);
      }else{
        setSearchBooks([]);
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    const timerID = setTimeout(async () => {
      await searchForBook(searchQuery);
    }, 500);

    // This return runs before useEffect run but not before its first run,
    // so we can delete Timeout for prev key stoke
    // to only call setFormIsValid only if the user stop typing
    return () => {
      clearTimeout(timerID);
    }
  }, [searchQuery])
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to={'/'}
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => {
              //   await searchForBook(event.target.value.trim());
              setSearchQuery(event.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks?.map((book) => <Book setBookShelf={setBookShelf} key={book.id} book={book}/>)}
        </ol>
        <Loading isLoading={loading}/>
      </div>
    </div>
  );
}
export default SearchPage;