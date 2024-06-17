import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techIcons } from "./techIcons";
import styles from "./Technologies.module.css";

const iconVariants = {
  initial: { y: "5vw" },
  animate: { y: "0" },
  transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
};

const Technologies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  return (
    <div className={styles.technologies}>
      <h2 className={styles.heading}>Core Technologies</h2>
      <div className={styles["grid-container"]} ref={ref}>
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className={styles["grid-item"]}
            data-testid="tech-icon"
            aria-label={item.label}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={iconVariants}
            transition={iconVariants.transition}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { Technologies };
