import { Layout, ProgressBar, Technologies } from "../../components";
import { resumeData } from "../../data";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import styles from "./Resume.module.css";

const Resume = () => {
  const { personalDetails, summary, sections } = resumeData;

  return (
    <Layout>
      <ProgressBar />
      <div className={styles.resume}>
        <header className={styles.header}>
          <h1>{personalDetails.name}</h1>
          <p className={styles.title}>{personalDetails.title}</p>
          <p>
            {personalDetails.phone}, {personalDetails.location}
          </p>
          <div className={styles["icons-container"]}>
            <a
              href="https://github.com/sidchopp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sidchopp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
            </a>
            <a href="mailto:sidchopp@gmail.com">
              <MdEmail />
            </a>
          </div>
        </header>
        <section className={styles.summary}>
          <p>{summary}</p>
        </section>
        <Technologies />
        {sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            {Array.isArray(section.items) ? (
              <ul>
                {section.items.map((item, idx) =>
                  typeof item === "string" ? (
                    <li key={idx}>{item}</li>
                  ) : item.url ? (
                    <li key={idx}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ) : (
                    <div key={idx}>
                      <h3>
                        {item.role}, {item.company}
                      </h3>
                      <p>{item.location}</p>
                      <p>{item.period}</p>
                      <ul>
                        {item.responsibilities.map((responsibility, rIdx) => (
                          <li key={rIdx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </Layout>
  );
};

export { Resume };
