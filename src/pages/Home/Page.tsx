import { motion } from "motion/react";
import LetterHop from "../../ui/animated/LetterHop";
import styles from "./Page.module.css";
import me from "../../assets/me.webp";
import Section from "./ui/Section.tsx";
import { Education, getUserData, UserData } from "../../model/user.model.ts";
import { useEffect, useState } from "react";

// Global Constants
const DT_DURATION = 1;
const DT_DELAY = DT_DURATION / 1.6;

function Home() {
  const [{ name, bio, role, education }, setUserData] = useState<UserData>({
    name: "Christoper",
    role: "Software Developer",
    bio: "I am a problem solver and quick learner who leverages emerging \n technologies. With a foundation in coding best practices, I develop \n dynamic, responsive web applications. I continuously explore new \n tools and frameworks to meet project requirements.",
    education: [
      {
        title: "WestCliff school",
        sub: "2015 - 2017",
        content:
          "Westcliff School of Skills provides specialized education for students needing alternative paths to success. Our tailored approach combines academic excellence with hands-on technical training, preparing students for the workforce or further technical education.We where prioritize holistic development, offering diverse sports and cultural activities alongside rigorous academics. At Westcliff, we empower students to excel academically, technically, and personally.",
      },
      {
        title: "CodeSpace Academy",
        sub: "2024 - 2024",
        content:
          "Take the most direct route to starting your career in tech. Our core program equips you with mastery and fluency in fundamental software development concepts that will be your foundation for success. After this course, you can land a junior developer role and learn on the job or expand your skills with specialized career tracks. With expertise in HTML, CSS, JavaScript, Git, Tailwind, React.js, and an introduction to TypeScript, Svelte.js",
      },
    ],
  });

  useEffect(() => {
    const fetch = async () => {
      const res = await getUserData();
      if (!res) return;
      setUserData(res);
    };
    fetch();
  }, []);

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
              data={name}
              delay={DT_DELAY}
              color="var(--ac-two)"
              duration={DT_DURATION}
            />
          </h2>
          <h4>
            Graduate{" "}
            <LetterHop
              data={role}
              delay={DT_DELAY}
              color="var(--ac-one)"
              duration={DT_DURATION}
            />
          </h4>
          <p>{bio}</p>
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

      <div className={styles.section}>
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
              From implementing seamless user interfaces to optimizing
              performance and ensuring responsiveness, I approach every project
              with enthusiasm and a commitment to excellence
            </span>
          }
          link="/websites"
          linkText="Web Apps"
          linkBgColor="var(--ac-one)"
        />

        {/* :Desktop Apps */}
        <Section
          title={
            <LetterHop
              data="Native Applications"
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-one)"
            />
          }
          direction="right"
          text={
            <span>
              I have developed a range of desktop applications using languages
              like{" "}
              <LetterHop
                data="TypeScript, C#, and Rust"
                delay={DT_DURATION}
                duration={DT_DURATION / 1.6}
                color="var(--ac-two)"
              />
              . These projects leverage a mix of web and desktop frameworks,
              such as{" "}
              <LetterHop
                data="WinForms"
                delay={DT_DURATION}
                duration={DT_DURATION / 1.6}
                color="var(--ac-two)"
              />{" "}
              with C#,{" "}
              <LetterHop
                data="Tauri"
                delay={DT_DURATION}
                duration={DT_DURATION / 1.6}
                color="var(--ac-two)"
              />{" "}
              with Rust, and React with TypeScript. Notably, one of my
              applications, a Presentation Manager (PM) app, is actively used in
              real-world settings, including my church. Each project
              demonstrates my dedication to creating functional, efficient, and
              impactful software solutions.
            </span>
          }
          link="/apps"
          linkText="Native Apps"
          linkBgColor="var(--ac-two)"
        />

        <motion.div className={styles.educationHeader}>
          <h2>
            <LetterHop
              data="Education"
              splitChar=""
              trigger="inView"
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-two)"
            />
          </h2>
        </motion.div>

        <motion.div className={styles.educationContent}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={styles.educationItem}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: DT_DURATION / 3,
                delay: (DT_DURATION / 3) * index,
              }}
            >
              <h3>
                <LetterHop
                  data={edu.title}
                  splitChar=""
                  trigger="inView"
                  delay={DT_DURATION}
                  duration={DT_DURATION / 1.6}
                  color="var(--ac-one)"
                />
              </h3>
              <h4>
                <LetterHop
                  data={edu.sub}
                  splitChar=""
                  trigger="inView"
                  delay={DT_DURATION}
                  duration={DT_DURATION / 1.6}
                  color="var(--ac-two)"
                />
              </h4>
              <p>
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: DT_DURATION / 1.6,
                  }}
                >
                  {edu.content}
                </motion.span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* TODO: add footer section */}
    </main>
  );
}

export default Home;
