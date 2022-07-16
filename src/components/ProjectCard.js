import React from "react";

export default function ProjectCard(props) {
  return (
    <li
      className="carousel__slide current-slide"
      style={{ left: props.styleLeft }}
    >
      <div className="carousel__text__container">
        <div>
          <h2 className="project-title ">{props.title}</h2>
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
