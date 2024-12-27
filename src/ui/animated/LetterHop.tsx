import { motion } from "motion/react";
import { ReactNode } from "react";

export default function LetterHop({
  data,
  delay,
  color = "inherit",
  duration,
  stagger = true,
}: {
  data: string[] | ReactNode[];
  delay: number;
  color?: string;
  duration: number;
  stagger?: boolean;
}) {
  return (
    <>
      {data.map((item, index) => (
        <motion.span
          initial={{
            color: "inherit",
            position: "relative",
          }}
          animate={{
            color,
            top: [
              0,
              `-${stagger ? index : 6}px`,
              `${stagger ? index : 6}px`,
              0,
            ],
          }}
          transition={{
            delay: stagger ? index / 15 + delay : index / 200,
            duration: stagger ? duration : duration / 2,
          }}
        >
          {item}
        </motion.span>
      ))}
    </>
  );
}
