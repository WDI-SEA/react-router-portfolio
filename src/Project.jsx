import React from 'react';

function Project(props) {
  return (
    <div>
      <div>
        <h3>{props.project.title}</h3>
      </div>
      <div>
        <img src={props.project.img} alt={`screenshot of project ${props.project.title}`} />
      </div>
      <div>
          {props.project.info}
      </div>
      <div>
          <a href="{props.project.link}">link</a>
      </div>
    </div>
  )
}

export default Project