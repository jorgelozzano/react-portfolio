import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={styles["project-card-wrapper"]}>
      <div className={styles["image-wrapper"]}>
          <img className={styles['project-img']} src={props.image} alt="Project" />
      </div>
      <div className={styles["text-wrapper"]}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
