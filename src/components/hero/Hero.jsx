import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";
import Loader from "./Loader";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>
          <span className={styles.sid}>Sid</span>dharth Chopra
        </h1>
        <p>
          Hey, I'm a <span className={styles.role}>Software Developer</span>{" "}
          based in sunny Calgary, Canada. I love building web products with
          great user experience.
        </p>
        <div className={styles["btn-container"]}>
          <Link className={styles.btn} to="/resume">
            My Resume
          </Link>
        </div>
        <div className={styles.loaderContainer}>
          <motion.div
            className={styles.loaderWrapper}
            initial="hidden"
            animate="visible"
          >
            <Loader />
          </motion.div>
        </div>
      </div>
      <div className={styles["img-container"]}>
        {/* <img className={styles.img} src="/home.jpg" alt="myself" /> */}
        <motion.div
          className="box"
          animate={{
            scale: [1, 1.05, 1.05, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 0,
            repeatDelay: 1,
          }}
        >
          <img className={styles.img} src="/home.jpg" alt="myself" />
        </motion.div>
      </div>
    </div>
  );
};

export { Hero };
