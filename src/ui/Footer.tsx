import { ReactNode, useEffect, useRef } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import { DT_DURATION } from "../pages/RootLayout";
import LetterHop from "./animated/LetterHop";

import styles from "./Footer.module.css";

function splitListIntoThree<T>(list: T[]): [T[], T[], T[]] {
  const chunkSize = Math.ceil(list.length / 3);

  const firstPart = list.slice(0, chunkSize);
  const secondPart = list.slice(chunkSize, chunkSize * 2);
  const thirdPart = list.slice(chunkSize * 2);

  return [firstPart, secondPart, thirdPart];
}

function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const contactDetails: { link: string; text: string; icon: ReactNode }[][] =
    splitListIntoThree([
      {
        link: "https://www.linkedin.com/in/christopher-vos-6469b7284",
        text: "Linkedin",
        icon: <FaLinkedin />,
      },
      {
        link: "https://github.com/fox5352/",
        text: "Github",
        icon: <FaGithub />,
      },
      {
        link: "https://leetcode.com/u/fox5352/",
        text: "LeetCode",
        icon: <SiLeetcode />,
      },
      {
        link: "https://codepen.io/fox5352",
        text: "Codepen",
        icon: <FaCodepen />,
      },
      {
        link: "mailto:christophervos522@gmail.com",
        text: "Gmail",
        icon: <BiLogoGmail />,
      },
    ]);

  useEffect(() => {
    const sizeCheck = () => {
      if (!footerRef.current || !containerRef.current) return;
      footerRef.current.style.height = `${containerRef.current.getBoundingClientRect().height}px`;
    };

    const checkInView = () => {
      sizeCheck();
      if (!footerRef.current || !containerRef.current) return;
      const footerBottom = footerRef.current.getBoundingClientRect().bottom;

      if (window.innerHeight >= footerBottom) {
        containerRef.current.style.position = "fixed";
        containerRef.current.style.bottom = `0px`;
      } else {
        containerRef.current.style.position = "relative";
      }
    };

    sizeCheck();
    checkInView();

    document.addEventListener("scroll", checkInView);
    document.addEventListener("resize", sizeCheck);

    return () => {
      document.removeEventListener("scroll", checkInView);
      document.removeEventListener("resize", sizeCheck);
    };
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.title}>
          <h3>
            <LetterHop
              delay={0}
              color="var(--ac-one)"
              data="Contact Me:"
              trigger="inView"
              duration={DT_DURATION}
            />
          </h3>
        </div>
        <div className={styles.content}>
          {/* TODO: */}
          {contactDetails.map((block) => (
            <ul className={styles.list}>
              {block.map((link) => (
                <a href={link.link} target="_blank">
                  <li>
                    <span>{link.icon}</span> {link.text}
                  </li>
                </a>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;