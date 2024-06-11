import { projectData } from "../../data";
import styles from "./MyProjects.module.css";

const MyProjects = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={`${styles.grid} ${styles.gridCols}`}>
        {projectData.map((project) => (
          <a
            className={styles["projects-links"]}
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
          >
            <article className={styles.article}>
              <img
                alt="placeholder"
                className={styles.image}
                height={263}
                src={project.img}
                width={350}
              />
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.techUsed}>Tech: {project.techUsed}</p>
                <p className={styles.description}>{project.description}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
};

export { MyProjects };
