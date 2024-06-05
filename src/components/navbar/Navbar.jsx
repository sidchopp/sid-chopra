import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="name">
        <Link to="/">SC</Link>
      </div>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export { Navbar };
