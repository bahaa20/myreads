import Book from "./Book";

const BookShelf = (props) => {
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => <Book key={book.id} book={book} setBookShelf={props.setBookShelf}/>)}
      </ol>
    </div>
  </div>);
}
export default BookShelf