import {
  ReactIcon,
  NextIcon,
  AwsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  GraphqlIcon,
  MongodbIcon,
} from "../../icons";
import styles from "./Technologies.module.css";

const Technologies = () => {
  const techIconsArray = [
    <ReactIcon />,
    <NextIcon />,
    <AwsIcon />,
    <TypeScriptIcon />,
    <JavaScriptIcon />,
    <GraphqlIcon />,
    <MongodbIcon />,
    <ReactIcon />,
    <ReactIcon />,
    <ReactIcon />,
    <ReactIcon />,
    <ReactIcon />,
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
