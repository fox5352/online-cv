import { motion } from "motion/react";
import SlideIn from "../../../ui/animated/SlideIn";
import { Link } from "react-router";

import styles from "./Section.module.css";

// Global Constants
const DT_DURATION = 1;

// Helper Functions
export default function Section({
  title,
  direction = "left",
  text,
  link,
  linkText,
  linkFgColor = "inherit",
  linkBgColor = "inherit",
}: {
  linkText: any;
  title: any;
  direction?: "left" | "right";
  text: any;
  className?: string;
  link: string;
  linkFgColor?: string;
  linkBgColor?: string;
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
              color: linkFgColor,
              backgroundColor: linkBgColor,
            }}
            whileHover={{
              scale: 0.9,
            }}
            whileTap={{
              scale: 0.8,
            }}
          >
            {linkText}
          </motion.button>
        </Link>
      </SlideIn>
    </motion.section>
  );
}
