import React from "react";

export default function ProjectCard(props) {
  if(props.index!==0)
  return (
    <button className="carousel__button carousel__button--left">
      <img src="https://i.imgur.com/UiUhUQW.png" alt="chevronL" />
    </button>
  );
  return (<></>)
}
