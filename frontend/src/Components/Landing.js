import React from "react";
import styles from "./Landing.module.css";
import LandingCard from "./LandingCard";
import { IoIosArrowDropdown } from "react-icons/io";
const Landing = () => {
  return (
    <div className={styles['landing-wrapper']}>
      <LandingCard />
    </div>
  );
};

export default Landing;
