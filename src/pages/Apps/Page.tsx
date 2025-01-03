import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import { motion } from "motion/react";

import { getNativeAppsRepos, RepoData } from "../../model/project.model";

import { DT_DURATION } from "../RootLayout";
import LetterHop from "../../ui/animated/LetterHop";

import styles from "./Page.module.css";
import Card from "../../ui/Card";
import Loading from "../../ui/Loading";

export default function Apps() {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [error, setError] = useState<{
    message: string;
    type: "warning" | "error";
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getNativeAppsRepos();

        if (data != null && data.length > 0) {
          setRepos(data);
        } else {
          setError({
            message: "No native apps found on GitHub",
            type: "warning",
          });
        }
      } catch (error) {
        console.error(error);
        setError({
          message: "failed to fetch native Apps data from GitHub",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <motion.div
          className={styles.headerContainer}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0,
            duration: DT_DURATION,
          }}
        >
          <h2>
            <LetterHop
              data="Native Apps"
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-one)"
            />
          </h2>
          <p>
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
          </p>
        </motion.div>
      </header>
      <div className={styles.body}>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Alert severity={error.type}>{error.message}</Alert>
        ) : (
          <>
            {repos.map((repo, index) => (
              <Card {...repo} index={index} key={repo.id} />
            ))}
          </>
        )}
      </div>
    </>
  );
}
