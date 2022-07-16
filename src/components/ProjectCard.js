import React from "react";

export default function ProjectCard(props) {
  return (
    <li className="carousel__slide current-slide" style={{ left: props.styleLeft }}>
      <div className="carousel__text__container">
        <div>
          <h2 className="project-title ">{props.title}</h2>
          <p className="project-description carousel__text">
            {props.description}
          </p>
          <video
            src={props.video}
            autoPlay={props.autoPlayBool}
            loop
            muted
            controls="controls"
            width="600"
            height="300"
          />
          <a className="project-link" target="_blank" href={props.liveLink}>
            Live Link!
          </a>
          <a className="project-github" target="_blank" href={props.githubRepo}>
            Github Repo
          </a>
        </div>
      </div>
    </li>
  );
}
