import styles from "./Technologies.module.css";

import { FaNode, FaAws, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiReact,
  SiContentful,
  SiMongodb,
  SiGraphql,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const Technologies = () => {
  const techIconsArray = [
    <SiReact />,
    <SiNextdotjs />,
    <FaNode />,
    <FaAws />,
    <SiTypescript />,
    <SiJavascript />,
    <SiExpress />,
    <SiMongodb />,
    <SiGraphql />,
    <SiContentful />,
    <FaHtml5 />,
    <FaCss3 />,
  ];
  return (
    <div className={styles.technologies}>
      <h2 className={styles.heading}>Core technologies</h2>
      <div className={styles["grid-container"]}>
        {techIconsArray.map((item, index) => (
          <div
            key={index}
            className={styles["grid-item"]}
            data-testid="tech-icon"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Technologies };
