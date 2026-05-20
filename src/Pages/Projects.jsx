// import React from 'react'
// import Forms from './Forms';
// import ToDoList from './ToDoList';
// import styles from '../style/Projects.module.css';
// import { Link } from "react-router-dom";

// export default function Projects() {
//    const projectData = [
//     {
//       title: "CityRiseToursWebsite",
//       description: "A simple app to manage daily tasks.",
//       path: "/todo"
//     },
//     {
//       title: "Contact Form",
//       description: "Form with validation using JavaScript.",
//       path: "/forms"
//     }
//   ];

//   return (
//     <div>
//       <div className={styles.ContentDiv}>
//         <h1 className={styles.heading}>My Projects</h1>

//         <div className={styles.projects}>
//           {projectData.map((project, index) => (
//            <div className={styles.card} key={index}>
//              <h2>{project.title}</h2>
//              <p>{project.description}</p>
//              <div className={styles.btnContainer}>
//                <Link to={project.path}>
//                 <button>Live Demo</button>
//               </Link>
//              </div>
//            </div>
//             ))}
//         </div>
//       </div>

//     </div>
//   )
// }

import React from "react";
import styles from "../style/Projects.module.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const projectData = [
    {
      title: "CityRise Tours Website",
      description:
        // "CityRise Tours Website is a modern travel and tour booking platform designed to help users explore destinations and plan their trips. It provides an intuitive interface where users can browse tour packages, view detailed itineraries, and make bookings seamlessly. The website focuses on delivering a smooth user experience with responsive design and visually appealing layouts.",
        "CityRise Tours Website is a modern and dynamic travel and tour booking platform designed to help users explore destinations and plan their trips with ease. The platform offers an intuitive and user-friendly interface where users can browse a variety of tour packages, view detailed itineraries, and make bookings seamlessly.It incorporates features like smart navigation, responsive layouts, and interactive elements to enhance user engagement. The website is optimized for performance and accessibility across different devices, ensuring a smooth and consistent experience for all users.Additionally, the project focuses on delivering visually appealing designs combined with practical functionality, making it both aesthetically pleasing and highly usable. It reflects strong frontend development skills, attention to UI/UX design, and the ability to build real-world web applications.",
      features: [
        "Search and filter tours",
        "Detailed tour information pages",
        "Easy navigation with clean layout",
        "Interactive booking forms",
        "Mobile-friendly design",
        "Fast loading performance",
        "Attractive UI with modern design",
        "Secure form validation",
        "Dynamic content rendering",
        "User-friendly booking flow",
      ],
      conclusion:
        "This project helped me improve my frontend and UI design skills.",
      image: "/images/secondpic.png",
      path: "https://cityrisetours.com/",
    },
    {
      title: "IT Solution Website",
      description:
         "ITSolutionWebsite is a modern and responsive web platform designed to showcase IT services and solutions in a professional and user-friendly manner. The website provides detailed information about various services such as web development, software solutions, and technical support.It incorporates a well-structured layout with intuitive navigation, allowing users to easily explore different service categories and understand the offerings clearly. The platform also includes interactive elements like contact forms and call-to-action sections, enabling seamless communication between users and service providers.The website is optimized for performance, accessibility, and cross-device compatibility, ensuring a consistent and smooth user experience across desktops, tablets, and mobile devices. Additionally, it emphasizes clean UI design and modern styling techniques.",
      features: [
        "User-friendly and clean UI",
"Responsive design for all devices",
"Service showcase section",
"Easy navigation with structured layout",
"Optimized layout for better user experience",
"Fast loading performance",
"Modern and attractive design",
"Cross-browser compatibility",
"Reusable components structure",
"Interactive contact form",
      ],
      conclusion:
        "This project strengthened my JavaScript logic and form handling.",
      image: "/images/eightpic.png",
      path: "https://arc-cos.com/",
    },
  ];

  return (
    <div className={styles.ContentDiv}>
      <h1
        className={styles.heading}
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Projects
      </h1>

      <div className={styles.projects}>
        {projectData.map((project, index) => (
          <div className={styles.card} key={index}>
            {/* ✅ Image */}
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImg}
            />

            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "26px",
                marginTop: "8px",
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                textAlign: "justify",
                fontSize: "16px",
                marginTop: "-14px",
              }}
            >
              {project.description}
            </p>

            {/* ✅ Features */}
            {/* <ul
              className={styles.features}
              style={{
                fontFamily: "Playfair Display, serif",
                textAlign: "justify",
                fontSize: "24px",
              }}
            >
              {project.features.map((item, i) => (
                <li key={i}>{item} </li>
              ))}
            </ul> */}

            {/* ✅ Features (2 Column Split) */}
            <div
              className={styles.featuresContainer}
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "16px",
              }}
            >
              {/* Left Column */}
              <ul>
                {project.features
                  .slice(0, Math.ceil(project.features.length / 2))
                  .map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>

              {/* Right Column */}
              <ul>
                {project.features
                  .slice(Math.ceil(project.features.length / 2))
                  .map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
            </div>

            {/* ✅ Conclusion */}
            {/* <p className={styles.conclusion}>{project.conclusion}</p> */}

            {/* <div className={styles.btnContainer}>
              <Link to={project.path}>
                <button>Live Demo</button>
              </Link>
            </div> */}
            <div className={styles.btnContainer}>
              <a href={project.path} target="_blank" rel="noopener noreferrer">
                <button>Live Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
