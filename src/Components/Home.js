import "../App.css";
import "../index.css";
import Header from "./Header.js";
import Books from "./Books.js";
import AddBook from "./AddBook.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [loading, setloading] = useState(true);
  const [books, setBooks] = useState([]);
  const [showAddBook, setShowAddBook] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);
  const getBooks = JSON.parse(localStorage.getItem("bookAdded"));
  useEffect(() => {
    if (getBooks == null) {
      setBooks([]);
    } else {
      setBooks(getBooks);
    }
  }, [getBooks]);
  const addBook = (book) => {
    const id = uuidv4();
    const newBook = { id, ...book };
    setBooks([...books, newBook]);
    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully added a new book!",
    });
    localStorage.setItem("bookAdded", JSON.stringify([...books, newBook]));
  };
  const deleteBook = (id) => {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
    Swal.fire({
      icon: "success",
      title: "Oops...",
      text: "You have successfully deleted a task!",
    });
    localStorage.setItem("bookAdded", JSON.stringify(deleteBook));
  };
  const editBook = (id) => {
    const title = prompt("Title");
    const author = prompt("Author");
    const pages = prompt("Number of Pages");
    const genre = prompt("Genre");
    const year = prompt("Publication Year");
    const myData = books.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          title: title,
          author: author,
          pages: pages,
          genre: genre,
          year: year,
          id: uuidv4(),
        };
      }
      return x;
    });
    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully edited an existing book!",
    });
    localStorage.setItem("bookAdded", JSON.stringify(myData));
    window.location.reload();
  };
  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="containerBooks">
            <Header
              showForm={() => setShowAddBook(!showAddBook)}
              changeTextAndColor={showAddBook}
            />
            {showAddBook && <AddBook onSave={addBook} />}
            <p>
              Keep track of your favorite books here! Just click the 'Add'
              button to begin recording your collection.
            </p>
          </div>
          <div className="containerBooks">
            <h3>Number of Books: {books.length}</h3>

            {books.length > 0 ? (
              <Books books={books} onDelete={deleteBook} onEdit={editBook} />
            ) : (
              "No Books Found!"
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default Home;
