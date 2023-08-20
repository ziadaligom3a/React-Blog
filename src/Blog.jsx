import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import AddComment from "./AddComment";

const Blog = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  const [comment, setComment] = useState(null);
  const [name, setName] = useState(null);
  const { data, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const HandleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      redirect("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="blog">
          <article>
            <h2>{data.title}</h2>
            <p>Written by: {data.author}</p>
            <div>{data.body}</div>
            <button onClick={() => HandleDelete(data.id)}>Delete Blog</button>
          </article>
          <br />
          <br />
          <hr />
          <div className="comments">
            <h2>Comments</h2>
            {data.comments.map((comment) => (
              <div className="comment" key={comment.id}>
                <h3>
                  <Link to={`/author/${comment.name}`}>{comment.name}</Link>
                </h3>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
