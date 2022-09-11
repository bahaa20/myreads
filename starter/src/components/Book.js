import OptionsComponent from "./OptionsComponent";

const Book = (props) => {
  return(<li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:`url(${props.book.imageLinks.smallThumbnail})`,
          }}
        ></div>
        <OptionsComponent status={props.book.shelf}/>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors.map((author)=>`${author}, `)}</div>
    </div>
  </li>);
}
export default Book;