import { motion } from "motion/react";
import LetterHop from "../../ui/animated/LetterHop";
import styles from "./Page.module.css";
import me from "../../assets/me.webp";

const DT_DURATION = 1;
const DT_DELAY = 0.5;
const NAME = "Christopher";
const ROLE = "Software Developer";

function Home() {
  return (
    <main className={styles.main}>
      <motion.section
        className={styles.about}
        data-section="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DT_DURATION / 3 }}
      >
        <div className={styles.contentBox}>
          <h2>
            Hi, I
            <motion.span
              initial={{
                color: "inherit",
              }}
              animate={{ color: "var(--ac-two)" }}
              transition={{
                delay: DT_DELAY - 0.1,
                duration: DT_DURATION,
              }}
            >
              '
            </motion.span>
            m{" "}
            <LetterHop
              data={NAME.split("")}
              delay={DT_DELAY}
              color="var(--ac-two)"
              duration={DT_DURATION}
            />
          </h2>
          <h4>
            Graduate{" "}
            <LetterHop
              data={ROLE.split("")}
              delay={DT_DELAY}
              color="var(--ac-one)"
              duration={DT_DURATION}
            />
          </h4>
          <p>
            A problem solver and a quick learner, always eager to face
            challenges and utilize new technologies. For instance, this site is
            built with Svelte, showcasing my solid foundation in UX design
            principles. I possess a demonstrated understanding of best coding
            practices and am enthusiastic about contributing to the creation of
            dynamic and responsive websites..
          </p>
        </div>
        {/* -------------------------------------------------------------------------------- */}
        <motion.div className={styles.imageBox}>
          <motion.img
            src={me}
            alt="an image of me the developer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: DT_DELAY, duration: DT_DURATION }}
          />
        </motion.div>
      </motion.section>
    </main>
  );
}

export default Home;
