const OptionsComponent = ({setBookShelf,book}) => {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={(book.shelf??"none")} onChange={(event) => {
        setBookShelf(book,event.target.value);
      }}>
        <option value="0" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
export default OptionsComponent