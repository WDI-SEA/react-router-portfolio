import React from "react";
import CarouselBtnPrev from "./CarouselBtnPrev";
import CarouselBtnNext from "./CarouselBtnNext";

export default function ProjectCard(props) {
  return (
    <li
      style={{ left: props.styleLeft }}
      className={`carousel__slide ${props.index === 0 ? "current-slide" : ""}`}
    >
      <div className="carousel__text__container">
        <div>
          <div className="carousel__header">
            <CarouselBtnPrev index={props.index} />
            &nbsp;&nbsp;
            <h2 className="project-title ">{props.title}</h2>
            &nbsp;&nbsp;
            <CarouselBtnNext index={props.index} />
          </div>
          <br />
          <br />
          <p className="project-description carousel__text">
            {props.description}
          </p>
          <div className="video-container">
            <video
              src={props.video}
              autoPlay={props.autoPlayBool}
              loop
              muted
              controls="controls"
              width="90%"
              max-width="600"
              height="300"
            />
          </div>

          <div className="links-container">
            <a className="project-link" target="_blank" href={props.liveLink}>
              Try It Out
            </a>
            <a
              className="project-github"
              target="_blank"
              href={props.githubRepo}
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
