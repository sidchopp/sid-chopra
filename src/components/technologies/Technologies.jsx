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
      <div className={styles.heading}>Core technologies</div>
      <div className={styles["grid-container"]}>
        {techIconsArray.map((item, index) => (
          <div key={index} className={styles["grid-item"]}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Technologies };
