import React from 'react'
import Project from './Project'

const Projects = (props) => {
    
    return (
        <div className='post-container'>
            <h1>Projects</h1>
            {props.projects.map(project => (
                <Project
                    title={project.title}
                    image={project.image}
                    content={project.content}
                />
            ))}
        </div>
    )
}

export default Projects