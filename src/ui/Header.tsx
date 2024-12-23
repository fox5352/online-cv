import { ReactNode, useEffect, useState } from "react";

import { NavLink } from "react-router";
import { motion } from "motion/react";
import { MdHomeFilled } from "react-icons/md";
import { IoHome, IoDesktop } from "react-icons/io5";
import {
  BsFillQuestionSquareFill,
  BsGlobeCentralSouthAsia,
} from "react-icons/bs";

import styles from "./Header.module.css";

// mobile constants
const MB_DURATION = 0.7;

export default function Header() {
  const [isMobileToggleNav, setIsMobileToggleNav] = useState(false);

  const NAV_LINKS: { text: string; link: string; element: ReactNode }[] = [
    {
      text: "home",
      link: "/",
      element: <IoHome aria-description="Home Page" />,
    },
    {
      text: "about",
      link: "/about",
      element: <BsFillQuestionSquareFill aria-description="About Page" />,
    },
    {
      text: "web sites",
      link: "/websites",
      element: <BsGlobeCentralSouthAsia aria-description="Web Sites Page" />,
    },
    {
      text: "Applications",
      link: "/apps",
      element: <IoDesktop aria-description="Apps Page" />,
    },
  ];

  const handleToggleMobileNav = () => setIsMobileToggleNav((prev) => !prev);

  return (
    <header className={styles.header}>
      {/* TODO: desktop nav */}
      <div></div>
      {/* TODO: mobile nav bar */}

      <div className={styles.mobileNavContainer}>
        <motion.nav
          className={styles.mobileNav}
          animate={{
            display: isMobileToggleNav ? "flex" : "hidden",
            width: isMobileToggleNav ? "90%" : "45px",
            borderRadius: "15px",
            backgroundColor: "var(--ac-one)",
            transition: { duration: MB_DURATION },
          }}
        >
          <motion.ul>
            {NAV_LINKS.map((link, index) => (
              <motion.li
                animate={{
                  scale: isMobileToggleNav ? [1.2, 0.8, 1] : 0,
                  transition: {
                    duration: MB_DURATION,
                    delay: (index / 100) * 10,
                  },
                }}
              >
                <NavLink className={styles.navLink} to={link.link}>
                  {link.element}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
        <motion.button
          onClick={handleToggleMobileNav}
          className={styles.appBarBtn}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              rotate: isMobileToggleNav ? -360 : 0,
              transition: { duration: MB_DURATION },
              borderLeft: " 1px solid var(--bg-one)",
              backgroundColor: isMobileToggleNav
                ? "var(--ac-one)"
                : "var(--ac-two)",
            }}
          >
            <MdHomeFilled />
          </motion.div>
        </motion.button>
      </div>
    </header>
  );
}
