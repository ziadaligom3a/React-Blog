import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
