import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

import Project from "./Project";
import "./styles/Projects.css";
import data from "../contexts/data";

const pageTransitions = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function Projects() {
  const [projects, setProjects] = useState(data);
  console.log(data);

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [projects]);

  return (
    <motion.section
      exit="out"
      animate="in"
      initial="out"
      variants={pageTransitions}
      className="projects"
    >
      <div className="projects-header">
        <span className="section-span" />
        <h2 className="section-header">Projects</h2>
      </div>
      <div className="projects-container">
        {/* <div className="project">
          <ReactPlayer
            controls="true"
            playIcon
            className="project-video"
            url="pucklist.mp4"
            width="640px"
          />
          <div className="project-text-container">
            <div className="home-project-text project-text">
              <h2>Pucklist</h2>
              <p>
                A hockey management application built for my hockey team after
                our old application was deprecated.
              </p>
              <p>
                Technologies used were React, Firebase(Auth), Express(NodeJS),
                MongoDB, Context API, Framer Motion, and Puppeteer (Web
                Scraping)
              </p>
              <div className="home-project-links">
                <div className="home-project-link home-project-link-live">
                  <a
                    className="home-project-link-a-left"
                    href="https://github.com/cutieboy/pucklist-client"
                  >
                    Front End
                  </a>
                </div>
                <div className="home-project-link home-project-link-code">
                  <a
                    className="home-project-link-a-right"
                    href="https://github.com/cutieboy/pucklist"
                  >
                    Back End
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {projects &&
          projects.map((project) => {
            return (
              <Project
                name={project.name}
                id={project.id}
                key={project.id}
                description={project.description}
                link={project.link}
                repo={project.repo}
                video={project.video}
              />
            );
          })}
      </div>
    </motion.section>
  );
}

export default Projects;
