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
        <img src="./kliff_sit.jpg" alt="about"></img>
        <h2>Hi, I'm Cliffton Thelusca</h2>
        <p>
          I'm a Software Developer who loves building modern web
          applications and looking to make a impact.
        </p>
        {/* <p>
        </p> */}
        <Link to="/contact">Contact</Link>
      </div>
    </motion.section>
  );
}

export default About;
