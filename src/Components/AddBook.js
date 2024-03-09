import { useState } from "react";

const AddTask = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
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
export default AddTask;
