import React from "react";
import styles from "./About.module.css";

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
        </div>
      </div>
      <div className={styles['work-experience']}>
      <h1 className="text-center my-5">Work experience</h1>
      <div className={styles['works-wrapper']}>
        <div className={styles['work-1']}>
          <h4>Front-End Intern</h4>
          <h6>Treebes - November 2020 to July 2021</h6>
          <br />
          <p className="text-justify px-5">In this job, I used to develop the designs given by the design department in
             order to create the best web page to the client that asked for it. I also worked maintaining stable this 
             created web pages and update them depending on the client instructions. </p>
          <p className="text-center px-5">Tech Stack: JavaScript, Bootstrap, HTML5, CSS3.</p>
        </div>
        <div className={styles['work-2']}>
          <h4>Software Developer Intern</h4>
          <h6>AstraZeneca - May 2022 (current job)</h6>
          <br />
          <p className="text-justify px-5">In AstraZeneca I first started as a Front-End development intern but 
          progressively I began to work on back-end projects to. Nowadays I work in projects on the Front-End side and 
          the Back-End side. This workflow allows me to gain experience and practice on both end's.</p>
          <p className="text-center px-5">Tech Stack: TypeScript, Angular, CSS3, HTML5, Express.js, Node.js, Jasmine.</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
