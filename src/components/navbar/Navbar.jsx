import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.name}>
        <Link to="/">SC</Link>
      </div>
      <div className={styles.links}>
        <Link to="/about">About</Link>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
};

export { Navbar };
