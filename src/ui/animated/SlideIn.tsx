import { motion } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";

type SlideInProps = {
  children: string | ReactNode;
  direction?: "left" | "right";
  className?: string;
  delay: number;
  duration: number;
};

function SlideIn({
  children,
  className,
  direction = "left",
  delay,
  duration,
}: SlideInProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const ref = containerRef.current;

    const scrollChecker = () => {
      const rect = ref.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isVisible = rect.top >= 0 && rect.top <= viewportHeight;
      setIsInView(isVisible);
    };

    scrollChecker();
    window.addEventListener("scroll", scrollChecker);
    return () => {
      window.removeEventListener("scroll", scrollChecker);
    };
  }, [containerRef.current]);

  return (
    <span ref={containerRef}>
      <motion.div
        className={className ? className : ""}
        initial={{
          position: "relative",
          [direction]: "-100%",
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                opacity: [0, 0.6, 1],
                [direction]: 0,
              }
            : {}
        }
        transition={{ delay, duration }}
      >
        {children}
      </motion.div>
    </span>
  );
}

export default SlideIn;
