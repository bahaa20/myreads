import OptionsComponent from "./OptionsComponent";

const Book = (props) => {
  return (<li>
    <div className="book">
      <div className="book-top">
        <a href={props?.book?.previewLink} target={"_blank"} rel="noreferrer" title={"preview"}>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.book.imageLinks?.smallThumbnail})`,
            }}
          ></div>
        </a>
        <OptionsComponent setBookShelf={props.setBookShelf} book={props.book}/>
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book?.authors?.map((author, index) =>
        (<div className="book-authors" key={index}>{author}</div>)
      )}
    </div>
  </li>);
}
export default Book;