import styles from "./Footer.module.css";
import { TodayMessage } from "./TodayMessage";
import { MapleLeafIcon } from "../../icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        Email: <a href="mailto:sidchopp@gmail.com">sidchopp@gmail.com</a>
      </div>
      <div className={styles.location}>
        Calgary - AB
        <span className={styles.maple}>
          <MapleLeafIcon />
        </span>
      </div>
      <div className={styles.year}>© 2024. All Rights Reserved.</div>
      <div className={styles.message}>
        <TodayMessage />
      </div>
    </div>
  );
};

export { Footer };
