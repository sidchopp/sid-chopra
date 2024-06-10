import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export { Layout };
