import { GitHubIcon, LinkedinIcon } from "../../icons";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div>
      My Resume
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
    </div>
  );
};

export { Resume };
