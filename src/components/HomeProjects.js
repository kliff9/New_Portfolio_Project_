import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { QueryProjects, urlFor } from "../contexts/SanityQueries";
import ReactPlayer from "react-player";

function HomeProjects() {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //     const handleProjectData = async() => {
  //         QueryProjects(setProjects)
  //     }
  //     handleProjectData()
  // }, [])

  return (
<<<<<<< HEAD
    <>
      <section className="home-projects">
        <span className="section-span section-span-right"></span>
        <h2 className="section-header section-header-right">Projects</h2>
        <div className="home-project">
          <ReactPlayer
            controls="true"
            playIcon
            className="home-video"
            url="RPmovies.mp4"
            width="690px"
          />
          <div className="home-project-text-container">
            <div className="home-project-text">
              <h2>RPmovies</h2>
              <p>
                A application that allows user to browse through a catalog of
                movies
              </p>
              <p>Technologies: Angular, Database API</p>
              <div className="home-project-links">
                <div className="home-project-link home-project-link-live">
                  <a
                    className="home-project-link-a-left"
                    href="https://movies-rp.vercel.app/"
                  >
                    Live Site
                  </a>
                </div>
                <div className="home-project-link home-project-link-code">
                  <a
                    className="home-project-link-a-right"
                    href="https://github.com/kliff9/moviesRP"
                  >
                    Github
                  </a>
                </div>
=======
    <section className="home-projects">
      <span className="section-span section-span-right"></span>
      <h2 className="section-header section-header-right">Projects</h2>
      <div className="home-project">
        <ReactPlayer
          controls="true"
          playIcon
          className="home-video"
          url="pucklist.mp4"
          width="640px"
        />
        <div className="home-project-text-container">
          <div className="home-project-text">
            <h2>Pucklist</h2>
            <p>
              A hockey management application built for my hockey team after our
              old application was deprecated.
            </p>
            <p>
              Technologies used were React, Firebase(Auth), Express(NodeJS),
              MongoDB, Context API, and Framer Motion
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
>>>>>>> 9e5932f (first commit)
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="home-project">
          <ReactPlayer
            controls="true"
            playIcon
            className="home-video"
            url="E-Com.mp4"
            width="690px"
          />
          <div className="home-project-text-container">
            <div className="home-project-text">
              <h2>Kliffs E-commerce Shop</h2>
              <p>A application that allows the buying and selling of goods</p>
              <p>Technologies: React.js. Node.js, MongoDB</p>
              <div className="home-project-links">
                <div className="home-project-link home-project-link-live">
                  <a
                    className="home-project-link-a-left"
                    href="https://kliff-e-com.herokuapp.com/"
                  >
                    Live Site
                  </a>
                </div>
                <div className="home-project-link home-project-link-code">
                  <a
                    className="home-project-link-a-right"
                    href="https://github.com/kliff9/Kliffs-E-commerce-Shop"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-project">
          <ReactPlayer
            controls="true"
            playIcon
            className="home-video"
            url="pkmncard.mp4"
            width="690px"
          />
          <div className="home-project-text-container">
            <div className="home-project-text">
              <h2>Pokemon Card Deck Builder</h2>
              <p>A application that allows user to build a deck of cards</p>
              <p>Technologies: React.js. Node.js, MongoDB</p>
              <div className="home-project-links">
                <div className="home-project-link home-project-link-live">
                  <a
                    className="home-project-link-a-left"
                    href="https://pkmntcg0.herokuapp.com"
                  >
                    Live Site
                  </a>
                </div>
                <div className="home-project-link home-project-link-code">
                  <a
                    className="home-project-link-a-right"
                    href="https://github.com/kliff9/pokemontcg_build_a_deck"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-project">
          <ReactPlayer
            controls="true"
            playIcon
            className="home-video"
            url="RPmovies.mp4"
            width="690px"
          />
          <div className="home-project-text-container">
            <div className="home-project-text">
              <h2>UniSwap-Trading-Bot</h2>
              <p>
                UniSwap Trading Bot. Make gains passively while running this bot
                for Uniswap.
              </p>
              <p>Technologies: Python, Web3.py, Ethereum, UniSwap</p>
              <div className="home-project-links">
                <div className="home-project-link home-project-link-live">
                  <a className="home-project-link-a-left" href="">
                    Live Site
                  </a>
                </div>
                <div className="home-project-link home-project-link-code">
                  <a
                    className="home-project-link-a-right"
                    href="https://github.com/kliff9/UniSwap-Trading-Bot"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-projects-see-more">
          <Link to="/projects">See More</Link>
        </div>
      </section>
    </>
=======
      </div>
      {projects &&
        projects
          .sort((a, b) => a.order - b.order)
          .map((e, i) => {
            if (i < 2)
              return (
                <div className="home-project" key={e.order}>
                  <img
                    className="home-project-img"
                    src={urlFor(e.image.asset._ref).width(800).url()}
                    alt={e.name}
                  />
                  <div className="home-project-text-container">
                    <div className="home-project-text">
                      <h2>{e.name}</h2>
                      {e.body.map((text) => {
                        return <p key={text._key}>{text.children[0].text}</p>;
                      })}
                      <div className="home-project-links">
                        <div className="home-project-link home-project-link-live">
                          <a className="home-project-link-a-left" href={e.link}>
                            Live Site
                          </a>
                        </div>
                        <div className="home-project-link home-project-link-code">
                          <a
                            className="home-project-link-a-right"
                            href={e.repo}
                          >
                            See Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            return null;
          })}
      <div className="home-projects-see-more">
        <Link to="/projects">See More</Link>
      </div>
    </section>
>>>>>>> 9e5932f (first commit)
  );
}

export default HomeProjects;
