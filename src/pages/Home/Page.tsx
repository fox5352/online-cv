import styles from "./Page.module.css";

import me from "../../assets/me.webp";

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.about} data-section="about">
        <div className={styles.contentBox}>
          <h2>
            Hi, I'm <span>Christopher</span>
          </h2>
          <h4>
            Graduate <span>Software Developer</span>
          </h4>
          <p>
            A problem solver and a quick learner, always eager to face
            challenges and utilize new technologies. For instance, this site is
            built with Svelte, showcasing my solid foundation in UX design
            principles. I possess a demonstrated understanding of best coding
            practices and am enthusiastic about contributing to the creation of
            dynamic and responsive websites
          </p>
        </div>
        {/* -------------------------------------------------------------------------------- */}
        <div className={styles.imageBox}>
          <img src={me} alt="an image of me the devloper" />
        </div>
      </section>
    </main>
  );
}

export default Home;
