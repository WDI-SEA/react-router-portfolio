import React from 'react'

const ProjectImages = (props) => {
  return (
    <div>
    <img src={require (`./${props.project.image}.png`)} />
    </div>
  )
}

export default ProjectImages