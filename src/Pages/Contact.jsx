import React from "react";
import styles from "../style/Contact.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      {/* <div className={styles.content}>
        <h1 className={styles.heading1}>Contact Me</h1>
        <p className={styles.contactText}>You can reach me through these platforms</p>

        <div className={styles.contactLinks}>

          <a href="mailto:abhaytomar400@gmail.com" className={styles.contactCard}>
            <FaEnvelope /> Email
          </a>

          <a href="tel:+917580994450" className={styles.contactCard}>
            <FaPhone /> Phone
          </a>

          <a href="https://github.com/TomarAbhay1" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/nishant-shrivastava-633a7624a/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://x.com/abhayto14394974" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <FaTwitter /> Twitter
          </a>

        </div>
      </div> */}

      <div className={styles.content}>
        <h1 className={styles.heading1}>Get In Touch</h1>
        <p className={styles.contactText}>
          Let's connect and build something amazing 🚀
        </p>

        <div className={styles.contactLinks}>
          <a
            href="mailto:shrivastavanishu2209@gmail.com"
            className={styles.contactCard}
          >
            <FaEnvelope className={styles.icon} />
            <span>Email</span>
          </a>

          <a href="tel:+919981446661" className={styles.contactCard}>
            <FaPhone className={styles.icon} />
            <span>Phone</span>
          </a>

          <a
            href="https://github.com/ShrivastavaNishant22"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaGithub className={styles.icon} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nishant-shrivastava-3a4356246"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <FaLinkedin className={styles.icon} />
            <span>LinkedIn</span>
          </a>

          {/* <a href="https://x.com/abhayto14394974" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
      <FaTwitter className={styles.icon}/> 
      <span>Twitter</span>
    </a> */}
        </div>
      </div>
    </div>
  );
}
