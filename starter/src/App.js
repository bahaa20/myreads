import "./App.css";
import {useEffect, useState} from "react";
import {getAll} from "./BooksAPI";
import SearchPage from "./pages/SearchPage";
import ShelfPage from "./pages/ShelfPage";
import {Route, Routes} from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const getAllBooks = async () => {
    setBooks(await getAll());
    // console.log(await getAll());
  }
  useEffect(() => {
    getAllBooks();
  }, [])

  return (
    <Routes>
      <Route exact path={"/"} element={<ShelfPage books={books}/>}/>
      <Route path={"/search"} element={<SearchPage books={books}/>}/>
    </Routes>
  );
}

export default App;
