import { motion } from "motion/react";
import LetterHop from "../../ui/animated/LetterHop";
import styles from "./Page.module.css";
import me from "../../assets/me.webp";
import SlideIn from "../../ui/animated/SlideIn";
import { Link } from "react-router";

function Home() {
  const DT_DURATION = 1;
  const DT_DELAY = DT_DURATION / 1.6;
  const NAME = "Christopher";
  const ROLE = "Software Developer";

  return (
    <main className={styles.main}>
      {/* :about section */}
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
              data={NAME}
              delay={DT_DELAY}
              color="var(--ac-two)"
              duration={DT_DURATION}
            />
          </h2>
          <h4>
            Graduate{" "}
            <LetterHop
              data={ROLE}
              delay={DT_DELAY}
              color="var(--ac-one)"
              duration={DT_DURATION}
            />
          </h4>
          <p>
            I am a problem solver and quick learner, always eager to take on new
            challenges and leverage emerging technologies. With a solid
            foundation in UX design principles, I strive to create intuitive and
            user-centric experiences. I also have a deep understanding of best
            coding practices and enjoy applying them in the development of
            dynamic, responsive websites and applications. Passionate about
            continuous learning, I am always exploring new tools and frameworks
            to enhance the functionality and performance of my projects.
          </p>
        </div>
        <motion.div className={styles.imageBox}>
          <motion.img
            src={me}
            alt="an image of me the developer"
            initial={{ opacity: 0, scale: DT_DURATION / 1.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: DT_DELAY, duration: DT_DURATION }}
          />
        </motion.div>
      </motion.section>
      {/* :webApps section */}
      <motion.section
        className={styles.webApps}
        initial={{ backgroundColor: "var(--bg-one)" }}
        animate={{ backgroundColor: "var(--bg-two)" }}
        transition={{ duration: DT_DURATION / 1.5 }}
      >
        <SlideIn
          className={styles.webAppsContent}
          delay={0}
          duration={DT_DURATION / 1.3}
        >
          <motion.h2>
            Live{" "}
            <LetterHop
              data="web applications."
              splitChar=""
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-two)"
            />
          </motion.h2>
          <motion.p>
            I have multiple projects deployed that showcase my expertise in
            building dynamic web applications. These projects are built with
            powerful technologies like{" "}
            <LetterHop
              data="React"
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-one)"
            />
            ,{" "}
            <LetterHop
              data="TypeScript"
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-one)"
            />
            , and backend integrations with{" "}
            <LetterHop
              data="databases"
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-one)"
            />{" "}
            and . Each project is designed with a strong focus on{" "}
            <LetterHop
              data="user experience"
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-one)"
            />
            . and follows best practices for clean, documented, scalable code.
            From implementing seamless user interfaces to optimizing performance
            and ensuring responsiveness, I approach every project with
            enthusiasm and a commitment to excellence
          </motion.p>
          <Link to="/websites">
            <motion.button
              initial={{
                scale: 1,
                backgroundColor: "var(--ac-one)",
              }}
              whileHover={{
                scale: 0.9,
              }}
              whileTap={{
                scale: 0.8,
                backgroundColor: "var(--ac-two)",
              }}
            >
              Web Apps
            </motion.button>
          </Link>
        </SlideIn>
      </motion.section>

      {/* TODO: test section remove later */}
      <section style={{ width: "30px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor
        perferendis, cupiditate quo quisquam minima quod culpa nisi aliquam ut,
        quasi animi itaque reiciendis corporis. Enim cum officiis atque
        architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nobis dolor perferendis, cupiditate quo quisquam minima quod culpa nisi
        aliquam ut, quasi animi itaque reiciendis corporis. Enim cum officiis
        atque architecto! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nobis dolor perferendis, cupiditate quo quisquam minima quod culpa
        nisi aliquam ut, quasi animi itaque reiciendis corporis. Enim cum
        officiis atque architecto! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nobis dolor perferendis, cupiditate quo quisquam
        minima quod culpa nisi aliquam ut, quasi animi itaque reiciendis
        corporis. Enim cum officiis atque architecto! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nobis dolor perferendis, cupiditate quo
        quisquam minima quod culpa nisi aliquam ut, quasi animi itaque
        reiciendis corporis. Enim cum officiis atque architecto! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nobis dolor perferendis,
        cupiditate quo quisquam minima quod culpa nisi aliquam ut, quasi animi
        itaque reiciendis corporis. Enim cum officiis atque architecto! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor
        perferendis, cupiditate quo quisquam minima quod culpa nisi aliquam ut,
        quasi animi itaque reiciendis corporis. Enim cum officiis atque
        architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nobis dolor perferendis, cupiditate quo quisquam minima quod culpa nisi
        aliquam ut, quasi animi itaque reiciendis corporis. Enim cum officiis
        atque architecto! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nobis dolor perferendis, cupiditate quo quisquam minima quod culpa
        nisi aliquam ut, quasi animi itaque reiciendis corporis. Enim cum
        officiis atque architecto!
      </section>
    </main>
  );
}

export default Home;
