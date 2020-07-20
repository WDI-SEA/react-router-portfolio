import React from 'react';
import projectSeed from './projectSeed';

const Projects = (props) => {
  return (
    <div>
      <h1>Projects</h1>
      { 
      projectSeed.map( (project, index) => {
        return (
            <div key={`project-${index}`}>
              <h3 key={`title-${index}`}> { project.title } </h3>
              <p key={`paragraph-${index}`}> { project.content } </p>
            </div>
          )
        }) 
      }
    </div>
  );
};

export default Projects;