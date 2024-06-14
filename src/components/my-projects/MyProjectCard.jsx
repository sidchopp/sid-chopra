import styles from "./MyProjects.module.css";

const MyProjectCard = ({ project }) => {
  return (
    <article className={styles.article}>
      <span className={styles["image-container"]}>
        <img
          alt="placeholder"
          className={styles.image}
          height={263}
          src={project.img}
          width={350}
        />
      </span>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.techUsed}>Tech: {project.techUsed}</p>
        <p className={styles.description}>{project.description}</p>
      </div>
    </article>
  );
};

export { MyProjectCard };
