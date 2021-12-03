import React from "react";
import styles from "./Portfolio.module.css";
import ProjectCard from "./ProjectCard";
import IlGarage from "../assets/ilgaragepic.png";
import PyPic from "../assets/pythonProjectImg.jpg";
import ExpTra from "../assets/expense-tracker-react.png";
import NefflixPic from "../assets/nefflix-img.png";
const Portfolio = () => {
  return (
    <div className={styles['portfolio-wrapper']}>
      <h1 className={styles["portfolio-title"]}>
        Some projects I want to show you
      </h1>
      <div className={styles["project-grid"]}>
        <ProjectCard
          image={IlGarage}
          title="Il Garage"
          description="Automotive school project used as a cataloge and client portal connected to a data base to buy or give services to a car."
        />
        <ProjectCard
          image={PyPic}
          title="Python Regex Search and Change"
          description="This is just a tiny example of a Python Script from the book Automate the boring stuff with Python that allows people to enter a text, search for a word and change it with a command-line program."
        />
        <ProjectCard
          image={ExpTra}
          title="Expenses Tracker"
          description="React Single Page App project that allows us to see as a list of expenses and filter them by year. Used to study React.js"
        />
        <ProjectCard
          image={NefflixPic}
          title="Nefflix (Movie Review)"
          description="A MERN stack web page for a school project used to review top trend movies."
        />
      </div>
    </div>
  );
};

export default Portfolio;
