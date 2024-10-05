import { Link } from "react-router-dom";
import styles from "./NewHero.module.css";
import { motion } from "framer-motion";

const NewHero = () => {
  const headingVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const name = <h2 className={styles.name}>Siddharth Chopra.</h2>;
  const bigHeading = (
    <h3 className={styles.bigHeading}>I deliver web solutions.</h3>
  );
  const softwareDeveloper = (
    <p className={styles.p}>
      I’m a <b>Software Developer</b> based in sunny Calgary, Canada. I love
      building products with great user experience.
    </p>
  );
  const resume = (
    <Link className={styles.btn} to="/resume">
      My Resume
    </Link>
  );

  const items = [name, bigHeading, softwareDeveloper, resume];
  return (
    <div className={styles.heroSection}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial="initial"
          animate="animate"
          variants={headingVariants}
          transition={{ duration: `${i + 1}`, ease: "easeOut" }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export { NewHero };
