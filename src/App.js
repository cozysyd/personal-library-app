import "./App.css";
import Header from "./Components/Header";
import Books from "./Components/Books";
import AddBook from "./Components/AddBook";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [books, setBooks] = useState([]);
  const [showAddBook, setShowAddBook] = useState(false);
  const addBook = (book) => {
    const id = uuidv4();
    const newBook = { id, ...book };
    setBooks([...books, newBook]);
    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully added a new book!",
    });
  };
  const deleteBook = (id) => {
    const deleteBook = books.filter((book) => book.id !== id);
    setBooks(deleteBook);
    Swal.fire({
      icon: "success",
      title: "Oops...",
      text: "You have successfully deleted a task!",
    });
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
  };
  return (
    <>
      <div className="container">
        {/* App Header */}
        <Header
          showForm={() => setShowAddBook(!showAddBook)}
          changeTextAndColor={showAddBook}
        />
        {/* Revealing the Add Task Form */}
        {showAddBook && <AddBook onSave={addBook} />}

        <h3>Number of Books: {books.length}</h3>

        {/* Displaying Tasks */}
        {books.length > 0 ? <Books books={books} /> : "No Task Found!"}
      </div>
    </>
  );
}
export default App;
