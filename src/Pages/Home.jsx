import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/Home.module.css";

export default function Home() {
  return (
    <section className={styles.ContentBody}>
      {/* Left Content */}
      <div className={styles.bodyContainer1}>
        <h3
          className={styles.one}
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Welcome to my portfolio explore my work and journey.
        </h3>

        <h1
          className={styles.two}
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          I’m Nishant Shrivastava, a dedicated professional committed to
          delivering high-quality software solutions and seamless user
          experiences.
        </h1>

        <p className={styles.three} style={{ fontFamily: "Playfair Display, serif" }}>
          Frontend Developer specializing in React and modern web technologies.
          I build scalable, responsive applications with a strong focus on user
          experience. Passionate about clean code and continuous learning.
        </p>

        <div className={styles.four}>
          <a
            href="/nishant_exp_cv.pdf"
            download
            className={styles.downloadBtn}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            ⬇ Download CV
          </a>

          <Link to="/projects" className={styles.F2} style={{ fontFamily: "Playfair Display, serif" }}>
            See My Work
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className={styles.bodyContainer2}>
        <img
          className={styles.pic}
          src="/images/nishant_passport.jpeg"
          alt="Portrait of Nishant Shrivastava"
        />

        <div className={styles.socialLinksDiv}>
          <a
            href="https://github.com/ShrivastavaNishant22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nishant-shrivastava-3a4356246"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/i_am_nishant_shrivastava?igsh=MWd1c3Q0eTQ4dXB1cQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          {/* <a
            href="https://x.com/nishantto23134209"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a> */}
        </div>
      </div>
    </section>
  );
}
