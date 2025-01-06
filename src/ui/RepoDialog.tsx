import { useEffect, useMemo, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from "@mui/material";
import { motion } from "motion/react";

import { useDialog } from "../store/Dialog/DialogContext";

import styles from "./RepoDialog.module.css";
import { DT_DURATION, DT_DELAY } from "../pages/RootLayout";
import { getLanguageColor } from "../lib/languageColors";
import MarkdownRender from "./MarkdownRender";

type Languages = {
  [key: string]: number;
};

type Error = {
  error: string;
  type: "warning" | "error";
};

function RepoDialog() {
  const { clearRepo, repo } = useDialog();
  const [isOpen, setIsOpen] = useState(false);
  const [languagesLoading, setLanguagesLoading] = useState(true);
  const [languages, setLanguages] = useState<Languages | null>(null);
  const [languagesError, setLanguagesError] = useState<Error | null>(null);
  // readme state
  const [readmeLoading, setReadmeLoading] = useState(true);
  const [readme, setReadme] = useState<string | null>(null);
  const [readmeError, setReadmeError] = useState<Error | null>(null);
  const link = useMemo(() => {
    if (repo != undefined) {
      // const topic = repo.topics[0] == "website" ? ;
      switch (repo.topics[0]) {
        case "website":
          return repo.homepage;
        case "native-apps":
          return `${repo.html_url}/releases`;
        default:
          return "";
      }
    } else {
      return "#";
    }
  }, [repo]);

  useEffect(() => {
    const getLanguages = async () => {
      if (repo != undefined) {
        try {
          setLanguagesLoading(true);
          setLanguagesError(null);
          setIsOpen(true);
          const res = await fetch(
            `/.netlify/functions/getLanguages?name=${repo.name}`,
          );

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(
              `HTTP error! status: ${res.status} error: ${errorData.error}`,
            );
          }

          const languages = await res.json();

          let total = 0;
          const keys: string[] = [];

          for (const [key, value] of Object.entries(languages)) {
            keys.push(`${key}`);
            total += Number(value) || 0;
          }

          const data: Languages = {};

          keys.forEach((key: string) => {
            const value = languages[key];
            const percentage = (value / total) * 100;
            data[key] = Math.round(percentage);
          });

          setLanguages(data);
        } catch (error) {
          console.error(`Error: ${error}`);
          setLanguagesError({
            error: "failed to get languages from github",
            type: "error",
          });
        } finally {
          setLanguagesLoading(false);
        }
      }
    };

    const getReadMe = async () => {
      if (repo != undefined) {
        try {
          setReadmeLoading(true);
          setReadmeError(null);

          const res = await fetch(
            `/.netlify/functions/getReadMe?name=${repo.name}`,
          );

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(
              `HTTP error! status: ${res.status} error: ${errorData.error}`,
            );
          }

          const data = await res.json();

          const decodedContent = atob(data.content);

          setReadme(decodedContent);
        } catch (error) {
          console.error(`Error  ${error}`);
          setReadmeError({
            error: "failed to get readme from github",
            type: "error",
          });
        } finally {
          setReadmeLoading(false);
        }
      }
    };

    getReadMe();
    getLanguages();
    return () => {};
  }, [repo]);

  const handleClose = () => {
    clearRepo();
    setIsOpen(false);
  };

  const languageMapper = (languages: Languages) => {
    return Object.entries(languages).map((data: [string, number], index) => {
      const [key, value] = data;
      return (
        <motion.span
          key={index}
          initial={{ backgroundColor: "inherit" }}
          animate={{
            background: getLanguageColor(key),
          }}
          transition={{
            delay: DT_DELAY / 1.2,
            duration: DT_DURATION / 1.4,
          }}
        >
          {key}: {value}%
        </motion.span>
      );
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      classes={{
        paper: styles.dialogPaper,
      }}
    >
      <DialogTitle className={styles.dialogTitle}>
        <a href={repo?.html_url || ""} target="_blank">
          {repo?.full_name || "loading..."}
        </a>
        <span>{" <-- repo link"}</span>
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <div className={styles.languageBox}>
          {languagesLoading ? (
            "loading..."
          ) : languagesError != null ? (
            <Alert severity={languagesError.type}>{languagesError.error}</Alert>
          ) : languages ? (
            languageMapper(languages)
          ) : (
            <></>
          )}
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        {readmeLoading ? (
          "loading..."
        ) : readmeError != null ? (
          <Alert severity={readmeError.type}>{readmeError.error}</Alert>
        ) : readme ? (
          <MarkdownRender>{readme}</MarkdownRender>
        ) : (
          <h4>No README found.</h4>
        )}
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <a href={link} target="_blank">
          <button>{repo?.name || ""}</button>
        </a>
        <button onClick={handleClose} color="primary">
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
}

export default RepoDialog;
