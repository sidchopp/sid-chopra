import { techIcons } from "./techIcons";
import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <h2 className={styles.heading}>Core technologies</h2>
      <div className={styles["grid-container"]}>
        {techIcons.map((item, index) => (
          <div
            key={index}
            className={styles["grid-item"]}
            data-testid="tech-icon"
            aria-label={item.label}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Technologies };
