import { Layout } from "../../components";
import styles from "./About.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <h2>About</h2>
        <p>
          <p>Hey there, I'm Sid.</p>
          I'm a Software Developer based in sunny Calgary, Canada. I love
          creating scalable web products with great user experience that aligns
          with evolving business requirements.
        </p>
        <p>
          When I'm not buried in code, you'll catch me reading, exploring new
          things, or traveling.
        </p>
        <h2>Story</h2>
        <p>
          After earning my Master's degree, I started as a Physics and
          Mathematics Instructor, fueled by my childhood fascination with
          science and technology. I absolutely loved sharing the wonders of
          universe with my students over the next few years, sparking their
          curiosity as we went along.
        </p>
        <p>
          As my journey progressed, I shifted gears from academia to explore the
          vast landscape of software development. Little did I know, diving into
          this new realm would prove just as thrilling as exploring the cosmos
          and since then there is no turning back.
        </p>
        <p>
          In my capacity as a Software Developer for the past few years, I've
          engaged in a myriad of projects, driven by a relentless curiosity to
          explore and leverage emerging technologies, ensuring the delivery of
          high-quality software solutions.
        </p>
        <h2>Goal</h2>
        <p>
          To keep pushing the envelope in technology to find real-world fixes.
        </p>
      </div>
    </Layout>
  );
};

export { About };
