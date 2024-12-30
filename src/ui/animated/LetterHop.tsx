import { motion } from "motion/react";

export default function LetterHop({
  data,
  splitChar = "",
  trigger = "onLoad",
  delay,
  color = "inherit",
  duration,
  stagger = true,
}: {
  data: string;
  splitChar?: string;
  trigger?: "inView" | "onLoad";
  delay: number;
  color?: string;
  duration: number;
  stagger?: boolean;
}) {
  return (
    <>
      {data.split(splitChar).map((item, index) => (
        <motion.span
          key={index}
          initial={{
            position: "relative",
            color: "inherit",
          }}
          animate={
            trigger == "onLoad"
              ? {
                  color,
                  top: [
                    0,
                    `-${stagger ? index : 6}px`,
                    `${stagger ? index : 6}px`,
                    0,
                  ],
                }
              : {}
          }
          whileInView={
            trigger == "inView"
              ? {
                  color,
                  top: [
                    0,
                    `-${stagger ? index : 6}px`,
                    `${stagger ? index : 6}px`,
                    0,
                  ],
                }
              : {}
          }
          transition={{
            delay: stagger ? index / 15 + delay : index / 200,
            duration: stagger ? duration : duration / 2,
          }}
        >
          {item}
          {splitChar === " " ? " " : ""}
        </motion.span>
      ))}
    </>
  );
}
