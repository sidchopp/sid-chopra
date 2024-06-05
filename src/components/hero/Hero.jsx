import { Link } from "react-router-dom";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
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
        <img className={styles.img} src="/home.jpg" alt="site banner" />
      </section>
    </div>
  );
};

export { Hero };
