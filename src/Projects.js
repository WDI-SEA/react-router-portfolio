import React from 'react'


const Projects = (props) => {
  return(
    <div>
      <h1>Check out my projects</h1>
      {props.projectLinks.map(screenshot => (
           <img src={require (`./${screenshot}.png`)} />
        ))}
      
    </div>
  )
}

export default Projects