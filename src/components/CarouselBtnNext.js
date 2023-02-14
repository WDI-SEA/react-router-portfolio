import React from "react";

export default function ProjectCard(props) {
  if(props.index!==4)
  return (
    <button className="carousel__button carousel__button--right">
      <img src="https://i.imgur.com/p8SFtmi.png" alt="chevronR" />
    </button>
  );
  return (<></>)
}
