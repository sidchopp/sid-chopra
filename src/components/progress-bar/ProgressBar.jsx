import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./ProgessBar.module.css";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div className={styles["progress-bar"]} style={{ scaleX }} />;
};

export { ProgressBar };
