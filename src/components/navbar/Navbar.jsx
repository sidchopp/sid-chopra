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
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

// CHECKING- To see this component name to show up in prod (with React-Dev tools )
Navbar.displayName = "Navbar Checking..";

export { Navbar };
