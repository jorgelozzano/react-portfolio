import React from "react";
import styles from "./Landing.module.css";
import LandingCard from "./LandingCard";
const Landing = () => {
  return (
    <div className={styles['landing-wrapper']}>
      <LandingCard />
    </div>
  );
};

export default Landing;
