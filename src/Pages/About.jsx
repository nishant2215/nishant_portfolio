import React from "react";
import styles from "../style/About.module.css";

export default function About() {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.A}>
          <h1 className={styles.heading}>Introduction</h1>
          <p className={styles.desc}>
            I’m Nishant Shrivastava, a Frontend Developer specializing in React
            and modern web technologies. I focus on building responsive,
            user-friendly, and performance-driven web applications.
          </p>
        </div>
        <div className={styles.A}>
          <h1 className={styles.heading}>My Journey</h1>
          <p className={styles.desc}>
            My journey into web development started with a curiosity about how
            websites work. Over time, I developed a strong interest in frontend
            technologies and began building projects using HTML, CSS, and
            JavaScript. Today, I primarily work with React to create dynamic and
            scalable applications.
          </p>
        </div>
        <div className={styles.A}>
          <h1 className={styles.heading}>Skills & Technologies</h1>
          <p className={styles.desc}>
            I work with technologies like React, JavaScript (ES6+), HTML5, CSS3,
            and tools such as Git and VS Code. I also focus on writing clean,
            maintainable code and following best practices.{" "}
          </p>
        </div>

        <div className={styles.A}>
          <h1 className={styles.heading}>What I Do</h1>
          <p className={styles.desc}>
            I specialize in building modern web interfaces that are fast,
            scalable, and user-centric. I enjoy transforming ideas into
            real-world applications and continuously improving performance and
            usability.
          </p>
        </div>

        <div className={styles.A}>
          <h1 className={styles.heading}>Projects / Achievements</h1>
          <p className={styles.desc}>
            I have worked on several projects including a React-based portfolio
            website and dynamic web applications. These projects helped me
            strengthen my problem-solving skills and practical understanding of
            frontend development.
          </p>
        </div>

        <div className={styles.A}>
          <h1 className={styles.heading}>Goals</h1>
          <p className={styles.desc}>
            I aim to grow as a Full Stack Developer and contribute to impactful
            projects while continuously learning new technologies.
          </p>
        </div>

        <div className={styles.four}>
          <a
            href="./nishant_exp_cv.pdf"
            className={styles.downloadBtn}
          >
            {" "}
            ⬇ Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
