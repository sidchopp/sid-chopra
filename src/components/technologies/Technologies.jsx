import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techIcons } from "./techIcons";
import styles from "./Technologies.module.css";

const techVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
};

const Technologies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={techVariants}
        transition={techVariants.transition}
      >
        <h2 className={styles.heading}>CORE TECHNOLOGIES</h2>
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
      </motion.div>
    </div>
  );
};

export { Technologies };
