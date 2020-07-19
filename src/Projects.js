import React from 'react'
import ProjectImages from './ProjectImages'

const Projects = (props) => {

  return(
    <div>
      <h1>Check out my projects</h1>
      {props.projects.map((project) => {
        return (
          <div>
          <a target="_blank" href={project.url}>
          {project.title}
          </a>
          <ProjectImages project={project} />
          </div>
        )})}
    </div>
  )
}

export default Projects