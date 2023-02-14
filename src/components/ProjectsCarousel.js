import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsInfo from "../data/projectsInfo.json";
import PokeCloneVid3 from "../videos/PokeCloneVid3.mov";
import AlgoViewsVid1 from "../videos/AlgoViewsVid1.mov";
import OoIHaveThatVid1 from "../videos/OoIHaveThatVid1.mov";
import ReartVid1 from "../videos/ReartVid1.mov";
import KCMOMoversVid1 from "../videos/KCMOMoversVid1.mov";
const videos = [
  PokeCloneVid3,
  AlgoViewsVid1,
  OoIHaveThatVid1,
  ReartVid1,
  KCMOMoversVid1,
];

export default function ProjectsCarousel() {
  // setTimeout required to get carousel.js to work
  // think it's to do with manipulating elements not yet created
  setTimeout(() => {
    require("../vanillaJS/carousel");
  }, 10);
  // state variable required to get some videos to autoPlay
  // not sure why
  const [autoPlayPokeClone, setAutoPlayPokeClone] = useState(false);
  const [autoPlayKCMOMovers, setAutoPlayKCMOMovers] = useState(false);
  useEffect(() => {
    setAutoPlayPokeClone(true);
  }, []);
  useEffect(() => {
    setTimeout(() => setAutoPlayKCMOMovers(true), 5);
  }, [autoPlayPokeClone]);

  return (
    <div id="projects__container">
      <div className="carousel">
        <div className="carousel__track-container">
          <ul className="carousel__track">
            {ProjectsInfo.projects.map((p, index) => {
              return (
                <ProjectCard
                  index={index}
                  title={p.title}
                  key={p.key}
                  styleLeft={p.styleLeft}
                  description={p.description}
                  video={videos[index]}
                  autoPlayBool={autoPlayPokeClone}
                  liveLink={p.liveLink}
                  githubRepo={p.githubRepo}
                />
              );
            })}
          </ul>
        </div>

        <div className="carousel__nav">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
        </div>
      </div>
    </div>
  );
}