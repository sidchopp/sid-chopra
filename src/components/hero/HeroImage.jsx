import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 20px, rgba(0,0,0,1) 20px, rgba(0,0,0,1) 20px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 20px)`;

const HeroImage = ({ inView }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView && inView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <img
        src="/home.jpg"
        alt=""
        onLoad={() => setIsLoaded(true)}
        className={styles.img}
      />
    </motion.div>
  );
};

export { HeroImage };
