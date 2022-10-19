import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import data from "../contexts/data";

function HomeProjects() {

  const [projects, setProjects] = useState(data);

    
    return (
        <section className="home-projects">
            <span className="section-span section-span-right"></span>
            <h2 className="section-header section-header-right">Projects</h2>
            {projects && projects.map((e) => {
                 return <div className="home-project" key={e.id}>
                <ReactPlayer controls="true" playIcon className="home-video" url={e.video} width="640px" />
                    <div className="home-project-text-container">
                        <div className="home-project-text">
                            <h2>{e.name}</h2>
                            <p >{e.description[2]}</p>
                            <p >{e.description[1]}</p>
                            <div className="home-project-links">
                                <div className="home-project-link home-project-link-live"><a className="home-project-link-a-left" href={e.link}>Live Site</a></div>
                                <div className="home-project-link home-project-link-code"><a className="home-project-link-a-right" href={e.repo}>See Code</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
            <div className="home-projects-see-more">
                <a href="https://github.com/kliff9">See More</a>
            </div>
        </section>
    )
}

export default HomeProjects
