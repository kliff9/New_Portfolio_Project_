import React from "react";

function HomeAbout() {
  return (
    <section className="home-about" id="about">
      <div className="home-about-text">
        <span className="section-span"></span>
        <h2 className="section-header">About Me</h2>
        <p>
          Hi, my name's Cliffton Thelusca, a Full-Stack Web Developer.I'm
          passionate about solving problems and improving my development skills.
        </p>
        <br />
        <p>
          I work primarily with MongoDB, Express, React, Node, and Python and
          have made many projects.
        </p>
      </div>
      <div className="home-about-image">
        <img src="./kliff_city.jpg" alt="about" />
      </div>
    </section>
  );
}

export default HomeAbout;