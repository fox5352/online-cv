import { ReactNode, useEffect, useRef, useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { motion } from "motion/react";

import styles from "./Carousel.module.css";

type Carousel = {
  comps?: ReactNode[];
  className?: string;
  timer?: number;
};

export default function Carousel({
  comps = [],
  className = "",
  timer = 1000,
}: Carousel) {
  const limit: number = comps.length;
  const [isHover, setIsHover] = useState(false);
  const [current, setCurrent] = useState(0);

  const setIndex = (num: number) => {
    if (num <= 0) {
      setCurrent(limit - 1);
    } else if (num > limit - 1) {
      setCurrent(0);
    } else {
      setCurrent(num);
    }
  };

  const nextSlide = () => {
    setIndex(current + 1);
  };
  const prevSlide = () => {
    setIndex(current - 1);
  };

  const builder = (comp: ReactNode, index: number) => {
    if (current == index) {
      return (
        <motion.span
          key={index}
          className={styles.content}
          initial={{
            display: "none",
            opacity: 0,
          }}
          animate={{
            display: "flex",
            opacity: 1,
          }}
          exit={{
            display: "none",
          }}
          transition={{
            duration: 1.2,
          }}
        >
          {comp}
        </motion.span>
      );
    } else {
      return null;
    }
  };

  return (
    <motion.div
      className={`${styles.carousel} ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.button
        onClick={prevSlide}
        className={`${styles.carouselBtn} ${styles.leftBtn}`}
        whileHover={{
          backgroundColor: "var(--ac-one)",
        }}
        whileTap={{
          backgroundColor: "var(--ac-two)",
        }}
      >
        <MdArrowBack />
      </motion.button>

      <motion.div className={styles.container}>{comps.map(builder)}</motion.div>

      <motion.button
        onClick={nextSlide}
        className={`${styles.carouselBtn} ${styles.rightBtn}`}
        whileHover={{
          backgroundColor: "var(--ac-one)",
        }}
        whileTap={{
          backgroundColor: "var(--ac-two)",
        }}
        transition={{
          duration: 0.04,
          ease: "linear",
        }}
      >
        <MdArrowForward />
      </motion.button>
    </motion.div>
  );
}
