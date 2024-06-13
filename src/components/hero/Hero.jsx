import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

import styles from "./Hero.module.css";

const Hero = () => {
  const [ref, inView, willChange] = useIntersectionObserver({
    willTransform: true,
  });

  let className = `${styles.element} `;

  if (inView) {
    className += `${styles.elementInView} `;
  } else {
    className += `${styles.elementNotInView} `;
  }

  if (willChange === "auto") {
    className += `${styles.willChangeAuto} `;
  } else if (willChange === "transform") {
    className += `${styles.willChangeTransform} `;
  }

  return (
    <div className={styles.hero}>
      <div ref={ref} className={className.trim()}>
        <h1>
          <span className={styles.sid}>Sid</span>dharth Chopra
        </h1>
        <p>
          Hey, I'm a <span className={styles.role}>Software Developer</span>{" "}
          based in sunny Calgary, Canada. I love building web products with
          great user experience.
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
