import { Link } from "react-router-dom";
import { Layout } from "../../components";
import styles from "./Home2.module.css";

const Home2 = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Siddharth Chopra</h2>
          <h3>Software Developer</h3>
          <p>Full Stack Developer based in Calgary</p>
          <div className={styles["btn-container"]}>
            <Link className={styles.btn} to="/resume">
              My Resume
            </Link>
          </div>
        </div>
        <img src="/home.jpg" alt="site banner" />
      </section>
    </Layout>
  );
};

export { Home2 };
