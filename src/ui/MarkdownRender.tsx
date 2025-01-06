import Markdown from "react-markdown";

import styles from "./MarkdownRender.module.css";

// TODO: add better styling and highlights

function MarkdownRender({ children }: { children: string }) {
  return (
    <span className={styles.body}>
      <Markdown>{children}</Markdown>
    </span>
  );
}

export default MarkdownRender;
