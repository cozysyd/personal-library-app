import { useState } from "react";
import Swal from "sweetalert2";

const AddBook = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title && !author && !pages && !genre && !year) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your book details or close the form!",
      });
    } else if (!title && author && pages && genre && year) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your title!",
      });
    } else if (!author && title && pages && genre && year) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your author!",
      });
    } else if (!pages && title && author && genre && year) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your number of pages!",
      });
    } else if (!genre && title && author && pages && year) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your genre!",
      });
    } else if (!year && title && author && pages && genre) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your publication year!",
      });
    } else {
      onSave({ title, author, pages, genre, year });
    }
    setTitle("");
    setAuthor("");
    setPages("");
    setGenre("");
    setYear("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Author</label>
        <input
          type="text"
          placeholder="add author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Number of Pages</label>
        <input
          type="text"
          placeholder="add number of pages"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Genre</label>
        <input
          type="text"
          placeholder="add genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Publication Year</label>
        <input
          type="text"
          placeholder="add publication year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddBook;
