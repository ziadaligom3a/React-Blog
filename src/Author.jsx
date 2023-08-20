import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Author = () => {
  const { name } = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:8000/blogs?author=${name}`
  );

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
export default Author;
