import BookShelf from "../components/BookShelf";
import {Link} from "react-router-dom";

const ShelfPage = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf shelfName={"Currently Reading"} books={props.books.filter((book)=>book.shelf==="currentlyReading")}/>
          <BookShelf shelfName={"want to Read"} books={props.books.filter((book)=>book.shelf==="wantToRead")}/>
          <BookShelf shelfName={"Read"} books={props.books.filter((book)=>book.shelf==="read")}/>
        </div>
      </div>
      <div className="open-search">
        <Link to={'/search'}>Add a book</Link>
      </div>
    </div>
  );
}
export default ShelfPage;