import { useMemo } from "react";
import { motion } from "motion/react";

import { RepoData } from "../model/project.model";

import { DT_DELAY, DT_DURATION } from "../pages/RootLayout";
import LetterHop from "./animated/LetterHop";

import styles from "./Card.module.css";
import { useDialog } from "../store/Dialog/DialogContext";
import { getLanguageColor } from "../lib/languageColors";

type Card = RepoData & {
  index: number;
};
function Card({ ...props }: Card) {
  const { name, language, description, index } = props;
  const { addRepo } = useDialog();
  const isEven = useMemo(() => index % 2 == 0, [index]);

  const colorPicker = (val: boolean) =>
    val ? "var(--ac-one)" : "var(--ac-two)";

  const handleClick = () => {
    addRepo(props as RepoData);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={styles.card}
      initial={{
        border: `0px solid ${colorPicker(!isEven)}`,
        opacity: 0,
      }}
      animate={{
        border: `3px solid ${colorPicker(!isEven)}`,
        opacity: 1,
      }}
      transition={{
        delay: DT_DELAY + index / 10,
        duration: 0.9,
      }}
    >
      <h3>
        <LetterHop
          data={name}
          color={colorPicker(isEven)}
          duration={DT_DURATION}
          delay={DT_DELAY}
        />
      </h3>
      <motion.h4
        initial={{ color: "inherit" }}
        animate={{ color: getLanguageColor(language) }}
        transition={{ duration: DT_DURATION }}
      >
        {language}
      </motion.h4>
      <p>
        {description
          ? description.slice(0, 145) + "..."
          : "No description available"}
      </p>
    </motion.button>
  );
}

export default Card;
