import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintBrush,
  faServer,
  faBrush,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

function HomeBadges() {
  return (
    <section className="home-badges-container">
      <div className="home-badges">
        <div className="home-badge">
          <div className="circle">
            <FontAwesomeIcon
              size="3x"
              className="icon"
              icon={faCode}
              color="#4f4d59"
            />
          </div>
          <h3>Front-End Development</h3>
          <p>Optimizing web pages for maximum speed and scalability.</p>
        </div>

        <div className="home-badge">
          <div className="circle">
            <FontAwesomeIcon
              size="3x"
              className="icon"
              icon={faServer}
              color="#4f4d59"
            />
          </div>

          <h3>Back-End Development</h3>
          <p>
            Managing the interchange of data between the server and the users.
          </p>
        </div>
        <div className="home-badge">
          <div className="circle">
            <FontAwesomeIcon
              size="3x"
              className="icon"
              icon={faBrush}
              color="#4f4d59"
            />
          </div>
          <h3>Design Focused</h3>
          <p>
            Developing in a way that is attractive and convenient that enhances
            a user's experience
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeBadges;
