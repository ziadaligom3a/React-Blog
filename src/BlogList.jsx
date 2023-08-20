import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </h2>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            Written by{" "}
            <Link
              to={`/author/${blog.author}`}
              style={{
                textDecoration: "none",
              }}
            >
              {blog.author}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
