import { Link } from "react-router-dom";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>
          <span className={styles.sid}>Sid</span>dharth Chopra
        </h1>
        <p>
          Hey, I'm a <span className={styles.role}>Software Developer</span>{" "}
          from Calgary. I love building scalable products with great user
          experience.
        </p>
        <div className={styles["btn-container"]}>
          <Link className={styles.btn} to="/resume">
            My Resume
          </Link>
        </div>
      </div>
      <div className={styles["img-container"]}>
        <img className={styles.img} src="/home.jpg" alt="myself" />
      </div>
    </div>
  );
};

export { Hero };
