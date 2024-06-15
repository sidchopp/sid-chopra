import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import styles from "./Hero.module.css";

const headingVariants = {
  initial: { x: "-100vw" },
  animate: { x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const introVariants = {
  initial: { x: "-100vw" },
  animate: { x: 0 },
  transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
};

const resumeVariants = {
  initial: { x: "-100vw" },
  animate: { x: 0 },
  transition: { duration: 1.0, delay: 0.1, ease: "easeOut" },
};

const imgVariants = {
  animate: { scale: [1, 1.05, 1] },
  transition: {
    duration: 1,
    times: [0.2, 0.8, 1],
    ease: "easeInOut",
  },
};

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div className={styles.hero} ref={ref}>
      <div>
        <motion.h1
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={headingVariants}
          transition={headingVariants.transition}
        >
          <span className={styles.sid}>Sid</span>dharth Chopra
        </motion.h1>
        <motion.p
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={introVariants}
          transition={introVariants.transition}
        >
          Hey, I'm a <span className={styles.role}>Software Developer</span>{" "}
          based in sunny Calgary, Canada. I love building web products with
          great user experience.
        </motion.p>
        <motion.div
          className={styles["btn-container"]}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={resumeVariants}
          transition={resumeVariants.transition}
        >
          <Link className={styles.btn} to="/resume">
            My Resume
          </Link>
        </motion.div>
      </div>
      <div className={styles["img-container"]}>
        <motion.img
          className={styles.img}
          src="/home.jpg"
          alt="myself"
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={imgVariants}
          transition={imgVariants.transition}
        />
      </div>
    </div>
  );
};

export { Hero };
