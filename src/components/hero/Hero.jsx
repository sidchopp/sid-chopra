import { GitHubIcon, LinkedinIcon } from "../../icons";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>
        <span className={styles.name}>Sid</span>dharth Chopra
      </h1>
      <h2>Software Developer</h2>
      <div className={styles["icons-container"]}>
        <a
          href="https://github.com/sidchopp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/sidchopp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </div>
      <div>
        <a
          className={styles.btn}
          target="_blank"
          href="https://sid-chopra.netlify.app/"
          rel="noreferrer"
        >
          <span>My Resume</span>
        </a>
      </div>
    </div>
  );
};

export { Hero };
