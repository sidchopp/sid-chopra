import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { techIcons } from "../technologies/techIcons.js";
import styles from "./InfiniteScroll.module.css";

const InfiniteScroll = ({ title }) => {
  const FAST_DURATION = 15;
  const SLOW_DURATION = 35;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <motion.div
        className={styles.scrollContainer}
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {Array(3)
          .fill(techIcons)
          .flatMap((icons, outerIdx) =>
            icons.map((item, idx) => (
              <span key={`${outerIdx}-${idx}`}>{item.icon}</span>
            ))
          )}
      </motion.div>
    </main>
  );
};

export { InfiniteScroll };
