import React from 'react';
import Project from './Project';

function Projects(props) {
  console.log(props)
  const project = props.projects.map( (project, index) => {
    return (
      <div key={index}>
        <Project project={project} />
      </div>
    )
  })

  return (
    <div>
      {project}
    </div>
  )
}

export default Projects