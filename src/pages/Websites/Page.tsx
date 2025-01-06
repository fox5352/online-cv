import { motion } from "motion/react";

import LetterHop from "../../ui/animated/LetterHop";

import { DT_DURATION } from "../RootLayout";

import styles from "./Page.module.css";
import { useEffect, useState } from "react";
import { getWebSitesRepos, RepoData } from "../../model/project.model";
import Loading from "../../ui/Loading";
import { Alert } from "@mui/material";
import Card from "../../ui/Card";

function Websites() {
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

        const data = await getWebSitesRepos();

        if (data != null && data.length > 0) {
          setRepos(data);
        } else {
          setError({
            message: "No web apps found on GitHub",
            type: "warning",
          });
        }
      } catch (error) {
        console.error(error);
        setError({
          message: "failed to fetch web Apps data from GitHub",
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
              data="Websites"
              delay={DT_DURATION}
              duration={DT_DURATION / 1.6}
              color="var(--ac-one)"
            />
          </h2>
          <p>
            <span>
              I have multiple projects deployed that showcase my expertise in
              building dynamic web applications. These projects are built with
              powerful technologies like{" "}
              <LetterHop
                data="React"
                delay={DT_DURATION}
                duration={DT_DURATION / 1.6}
                color="var(--ac-two)"
              />
              ,{" "}
              <LetterHop
                data="TypeScript"
                delay={DT_DURATION}
                duration={DT_DURATION / 1.6}
                color="var(--ac-two)"
              />
              , and backend integrations with{" "}
              <LetterHop
                data="databases"
                delay={DT_DURATION}
                duration={DT_DURATION / 1.6}
                color="var(--ac-two)"
              />{" "}
              and . Each project is designed with a strong focus on{" "}
              <LetterHop
                data="user experience"
                delay={DT_DURATION}
                duration={DT_DURATION / 1.6}
                color="var(--ac-two)"
              />
              . and follows best practices for clean, documented, scalable code.
              From implementing seamless user interfaces to optimizing
              performance and ensuring responsiveness, I approach every project
              with enthusiasm and a commitment to excellence
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

export default Websites;
