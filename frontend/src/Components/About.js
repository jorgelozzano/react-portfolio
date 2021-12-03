import React from "react";
import styles from "./About.module.css";
import me from "../assets/me2.jpeg";

const About = () => {
  return (
    <div>
      <h1 className="text-center my-5">About me</h1>
      <div className={styles["text-wrapper"]}>
        <p className={styles["text-block"]}>
          My name is Jorge, I am a software engineer student with a very high
          interest in web development. I have experience as Front-End
          development and I am currently learning Back-End development.
        </p>
        <p className={styles["text-block"]}>
          I love to work on software challenges and to collaborate with teams. I
          enjoy updating my knowledge with new technologies to apply them in my
          code.
        </p>
      </div>
      <h1 className="text-center my-5">Software and me</h1>
      <div className={styles["software-me-wrapper"]}>
        <div className={styles["software-me-text-wrapper"]}>
          <p className={styles["text-block2"]}>
            Software is one of my favorite topics to spend time at, I found
            software as a way to translate my creativity and feelings while
            learning something new. Create new software projects or learning
            about new technologies is one of my favorite hobbies, I like to
            create projects in order to apply my software knowledge and to have
            fun! Aside from software, I enjoy spending my time with my family
            and friends, doing contact sports, learning new languages, cooking
            and being a geek at cars.
          </p>
          <div className={styles["img-block-wrapper"]}>
            <img className={styles["me-img"]} src={me} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
