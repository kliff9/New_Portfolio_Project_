import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

function Project(props) {
  const { name, id, video, description, link, repo } = props;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="project"
      key={id}
    >
      {/* <img src={image} alt={name} /> */}
      <ReactPlayer
        controls="true"
        playIcon
        className="project-video"
        url={video}
        width="640px"
      />
      <div className="project-text-container">
        <div className="home-project-text project-text">
          <h2>{name}</h2>
          <p >{description[0]}</p>
          <p >{description[1]}</p>
          <div className="project-links home-project-links">
            <div className="home-project-link home-project-link-live">
              <a className="home-project-link-a-left" href={link}>
                Live Site
              </a>
            </div>
            <div className="home-project-link home-project-link-code">
              <a className="home-project-link-a-right" href={repo}>
                See Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;

// return (
//     <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}} className="project" key={id}>
//         <img src={image} alt={name} />
//         <div className="project-text-container">
//             <div className="home-project-text project-text">
//                 <h2>{name}</h2>
//                 <div>{description.map((body) => {
//                     return <p key={body._key}>{body.children[0].text}</p>
//                 })}</div>
//                 <div className="project-links home-project-links">
//                     <div className="home-project-link home-project-link-live"><a className="home-project-link-a-left" href={link}>Live Site</a></div>
//                     <div className="home-project-link home-project-link-code"><a className="home-project-link-a-right" href={repo}>See Code</a></div>
//                 </div>
//             </div>
//         </div>
//     </motion.div>
// )
