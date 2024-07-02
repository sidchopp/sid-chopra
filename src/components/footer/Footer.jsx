import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { TodayMessage } from "./TodayMessage";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div>Based in Calgary.</div>
          <div>Available Worldwide.</div>
          <div className={styles.email}>
            <a href="mailto:sidchopp@gmail.com">Let's Chat.</a>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Résumé</Link>
        </div>
      </div>
      <div style={{ marginTop: "80px" }}>
        <div className={styles.message}>
          <TodayMessage />
        </div>
        <div className={styles.year}>© 2024. Siddharth Chopra</div>
      </div>
    </div>
  );
};

export { Footer };
