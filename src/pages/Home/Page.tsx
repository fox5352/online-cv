import { motion } from "motion/react";
import LetterHop from "../../ui/animated/LetterHop";
import styles from "./Page.module.css";
import me from "../../assets/me.webp";
import SlideIn from "../../ui/animated/SlideIn";
import { Link } from "react-router";

const DT_DURATION = 1;
const DT_DELAY = DT_DURATION / 1.6;
const NAME = "Christopher";
const ROLE = "Software Developer";

function Home() {
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
      <Section
        title={
          <LetterHop
            data="Web Applications."
            splitChar=""
            delay={DT_DURATION}
            duration={DT_DURATION / 1.6}
            color="var(--ac-two)"
          />
        }
        text={
          <span>
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
          </span>
        }
        link="/websites"
        linkText="Web Apps"
      />

      {/* :Desktop Apps */}
      <Section
        title="Native Applications"
        direction="right"
        text={
          <span>
            I have developed a range of desktop applications using languages
            like TypeScript, C#, and Rust. These projects leverage a mix of web
            and desktop frameworks, such as WinForms with C#, Tauri with Rust,
            and React with TypeScript. Notably, one of my applications, a
            Presentation Manager (PM) app, is actively used in real-world
            settings, including my church. Each project demonstrates my
            dedication to creating functional, efficient, and impactful software
            solutions.
          </span>
        }
        link="/apps"
        linkText="Native Apps"
      />

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

function Section({
  title,
  direction = "left",
  text,
  link,
  linkText,
}: {
  linkText: any;
  title: any;
  direction?: "left" | "right";
  text: any;
  className?: string;
  link: string;
}) {
  return (
    <motion.section
      className={styles.section}
      initial={{ backgroundColor: "var(--bg-one)" }}
      animate={{ backgroundColor: "var(--bg-two)" }}
      transition={{ duration: DT_DURATION / 1.5 }}
    >
      <SlideIn
        className={styles.sectionContent}
        direction={direction}
        delay={0}
        duration={DT_DURATION / 1.3}
      >
        <motion.h2>{title}</motion.h2>
        <motion.p>{text}</motion.p>
        <Link to={link}>
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
            {linkText}
          </motion.button>
        </Link>
      </SlideIn>
    </motion.section>
  );
}

export default Home;
