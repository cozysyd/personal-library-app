import Book from "./Book";
import "../index.css";
const Books = ({ books, onDelete, onEdit }) => {
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </>
  );
};
export default Books;
