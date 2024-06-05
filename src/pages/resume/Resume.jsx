import { Layout } from "../../components";
import { resumeData } from "../../data";
import { GitHubIcon, LinkedinIcon, MailIcon } from "../../icons";
import styles from "./Resume.module.css";

const Resume = () => {
  const { personalDetails, summary, sections } = resumeData;

  return (
    <Layout>
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
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sidchopp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a href="mailto:sidchopp@gmail.com">
              <MailIcon />
            </a>
          </div>
        </header>
        <section className={styles.summary}>
          <h2>Professional Summary</h2>
          <p>{summary}</p>
        </section>
        {sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            {Array.isArray(section.items) ? (
              <ul>
                {section.items.map((item, idx) =>
                  typeof item === "string" ? (
                    <li key={idx}>{item}</li>
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
