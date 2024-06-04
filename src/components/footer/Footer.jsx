import styles from "./Footer.module.css";
import { TodayMessage } from "./TodayMessage";
import { MapleLeafIcon, MailIcon } from "../../icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["icon-container"]}>
        <span className={styles.icon}>
          <MailIcon />
        </span>
        <a href="mailto:sidchopp@gmail.com">sidchopp@gmail.com</a>
      </div>
      <div className={styles.location}>
        Calgary - AB
        <span className={styles.icon}>
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
