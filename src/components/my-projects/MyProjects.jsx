import { LazyMotion, domAnimation, m } from "framer-motion";
import { MyProjectCard } from "./MyProjectCard";
import { projectData } from "../../data";
import styles from "./MyProjects.module.css";

const hyperlinkVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const MyProjects = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className={styles.projects}>
        <h2 className={styles.heading}>My Projects</h2>
        <div className={`${styles.grid} ${styles.gridCols}`}>
          {projectData.map((project) => (
            <m.a
              className={styles["projects-links"]}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial="initial"
              animate="animate"
              transition={hyperlinkVariants.transition}
              variants={hyperlinkVariants}
            >
              <MyProjectCard project={project} />
            </m.a>
          ))}
        </div>
      </div>
    </LazyMotion>
  );
};

export { MyProjects };
