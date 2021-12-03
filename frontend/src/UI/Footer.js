import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer-text"]}>
        <p>© Copyright Jorge Ernesto Lozano López Pinto ☄️</p>
      </div>
      <div className={styles["footer-icons"]}>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/jorge_lozzano/?hl=es-la"
              className={styles["instagramBtn"]}
            >
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jorge-ernesto-lozano-l%C3%B3pez-pinto-6b0841188/"
              className={styles["linkedinBtn"]}
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jorgelozzano"
              className={styles["githubBtn"]}
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ernie.lozano23@gmail.com"
              className={styles["gmailBtn"]}
            >
              <AiFillMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
