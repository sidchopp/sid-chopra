import { Link } from "react-router-dom";
import styles from "./NewHero.module.css";
import { motion } from "framer-motion";

const NewHero = () => {
  const headingVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const one = <h1 className={styles.h1}>Hi, I am</h1>;
  const two = <h2 className={styles.name}>Siddharth Chopra.</h2>;
  const three = (
    <h3 className={styles.bigHeading}>I build things for the web.</h3>
  );
  const four = (
    <p className={styles.p}>
      I’m a Software Developer based in sunny Calgary, Canada. I love building
      products with great user experience.
    </p>
  );
  const five = (
    <Link className={styles.btn} to="/resume">
      My Resume
    </Link>
  );

  const items = [one, two, three, four, five];
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
