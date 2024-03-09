import { FaPencilAlt, FaTimes } from "react-icons/fa";
import "../index.css";
const Book = ({ book, onDelete, onEdit }) => {
  return (
    <div>
      <div className="book">
        <div>
          <p className="bookTitle">
            <span className="textBold">Book Title:</span> {book.title}
          </p>
          <p className="bookAuthor">
            <span className="textBold">Author:</span> {book.author}
          </p>
          <p className="bookPages">
            <span className="textBold">Number of Pages:</span> {book.pages}
          </p>
          <p className="bookGenre">
            <span className="textBold">Genre:</span> {book.genre}
          </p>
          <p className="bookYear">
            <span className="textBold">Publication Year:</span> {book.year}
          </p>
        </div>
        <div>
          <p>
            <FaTimes onClick={() => onDelete(book.id)} className="delIcon" />
          </p>
          <p>
            <FaPencilAlt onClick={() => onEdit(book.id)} className="editIcon" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Book;
