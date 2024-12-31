import { useEffect, useState } from "react";
import { getNativeAppsRepos, RepoData } from "../../model/project.model";
import LetterHop from "../../ui/animated/LetterHop";

import styles from "./Page.module.css";

const DT_DURATION = 1;
const DT_DELAY = DT_DURATION / 1.6;

export default function Apps() {
  const [repos, setRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNativeAppsRepos();

      if (data != null && data.length > 0) {
        setRepos(data);
      }
    };

    fetchData();
  }, [])

  return (
    <>
    <header className={styles.header}>
      <h2>
        <LetterHop data="Native Apps" delay={DT_DURATION} duration={DT_DURATION / 1.6} color="var(--ac-two)" />
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, nisi omnis doloremque illum vero officia unde vel non recusandae similique reprehenderit fuga odit. Eos earum tempora inventore distinctio rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, nisi omnis doloremque illum vero officia unde vel non recusandae similique reprehenderit fuga odit. Eos earum tempora inventore distinctio rerum?</p>
    </header>
      <div>
        {repos.map(repo=>(
          <button key={repo.id}>
            <h3>{repo.name}</h3>
            <h4>{repo.language}</h4>
            <p>{repo.description}</p>
          </button>
        ))}
      </div>
    </>
  );
}
