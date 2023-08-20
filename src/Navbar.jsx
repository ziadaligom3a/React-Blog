import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Zix Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
