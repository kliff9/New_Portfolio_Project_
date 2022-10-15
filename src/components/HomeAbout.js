import React from "react";

function HomeAbout() {
  return (
    <section className="home-about" id="about">
      <div className="home-about-text">
        <span className="section-span"></span>
        <h2 className="section-header">About Me</h2>
        <p>
          Hi, my name's Cliffton Thelusca, A Software Developer who loves
          building modern web applications and wants to make a impact.
        </p>
        <br />
        {/* <p>
        </p> */}
      </div>
      <div className="home-about-image">
        <img src="./kliff_city.jpg" alt="about" />
      </div>
    </section>
  );
}

export default HomeAbout;
