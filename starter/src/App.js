import "./App.css";
import {useEffect, useState} from "react";
import {getAll, update} from "./BooksAPI";
import SearchPage from "./pages/SearchPage";
import ShelfPage from "./pages/ShelfPage";
import {Route, Routes} from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllBooks = async () => {
    setLoading(true)
    setBooks(await getAll());
    setLoading(false)
  }
  useEffect(() => {
    getAllBooks();
  }, [])
  const setBookShelf = async (book, bookShelf) => {
    setLoading(true)
    await update(book,bookShelf);
    await getAllBooks();
    setLoading(false)
  }
  return (
    <Routes>
      <Route exact path={"/"} element={<ShelfPage books={books} loading={loading} setBookShelf={setBookShelf}/>}/>
      <Route path={"/search"} element={<SearchPage myBooks={books} setBookShelf={setBookShelf}/>}/>
    </Routes>
  );
}

export default App;
