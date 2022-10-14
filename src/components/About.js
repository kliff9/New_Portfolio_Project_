import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./styles/About.css";

const pageTransitions = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      exit="out"
      animate="in"
      initial="out"
      variants={pageTransitions}
      className="about"
    >
      <div className="about-container">
        <img src="./cliffSmilecircle.png" alt="about"></img>
        <h2>Hi, I'm Cliffton Thelusca</h2>
        <p>
          I'm a Software Developer from San Jose, CA. I love building modern web
          applications that make people's lives easier.
        </p>
        <p>
          I'm passionate about solving problems and improving the lives of
          others through software engineering. I'm currently looking for roles
          as a Front-End or Full-Stack Web Developer, and I'm always interested
          in talking to other developers.
        </p>
        <Link to="/contact">Contact</Link>
      </div>
    </motion.section>
  );
}

export default About;
