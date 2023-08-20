import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [author, setAuthor] = useState("Mario");
  const redirect = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
      comments: [
        {
          id: 1,
          name: "Mario",
          comment: "Also das ist dein zweiter Blog?",
        },
        {
          id: 2,
          name: "ziad",
          comment: "Ja das ist richtig.",
        },
      ],
    };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog added");
      redirect("/");
    });
  };
  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Blog Title: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          required
        />
        <label htmlFor="content">Blog Content: </label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          id="content"
          required
        ></textarea>
        <label htmlFor="author">Blog Author:</label>
        <select
          onChange={(e) => setAuthor(e.target.value)}
          id="author"
          value={author}
        >
          <option value="mario">Mario</option>
          <option value="ziad">Ziad</option>
        </select>
        <button>Add a Blog</button>
      </form>
    </div>
  );
};

export default Create;
